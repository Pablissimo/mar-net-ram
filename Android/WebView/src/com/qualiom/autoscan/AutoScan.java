package com.qualiom.autoscan;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

import android.R.bool;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.hardware.Camera;
import android.hardware.Camera.PictureCallback;
import android.hardware.SensorManager;
import android.os.Environment;
import android.view.Surface;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewGroup.LayoutParams;
import android.webkit.JavascriptInterface;
import android.widget.RelativeLayout;

@SuppressLint("NewApi")
public class AutoScan {

	private Camera cameraHardware;
	private SurfaceView cameraView;
	private MainActivity mainActivity;
	private int cameraId = 0;
	private int currLeft = -1, currTop, currWidth, currHeight;
	public boolean initOk = false;

	@JavascriptInterface
	public void InitOK() {
		initOk = true;
	}

	@JavascriptInterface
	public void ativaCamera() {
		if (cameraHardware == null) {
			cameraHardware = Camera.open(cameraId);
			mainActivity.execJS("window.AutoScan_onCameraPreview();");
		}
	}

	@JavascriptInterface
	public void posicionaCamera(int left, int top, int width, int height) {
		if (cameraHardware != null) {

			if (left != currLeft || top != currTop || width != currWidth
					|| height != currHeight) {
				currLeft = left;
				currTop = top;
				currWidth = width;
				currHeight = height;
				mainActivity.runOnUiThread(new Runnable() {
					@Override
					public void run() {
						cameraView.setVisibility(View.VISIBLE);
						android.widget.RelativeLayout.LayoutParams l = new RelativeLayout.LayoutParams(
								currWidth, currHeight);
						l.setMargins(currLeft, currTop, 0, 0);
						cameraView.setLayoutParams(l);
					}
				});
			}
			// cameraView.bringToFront();
			// cameraView.invalidate();
			// RelativeLayout.LayoutParams lp = new
			// RelativeLayout.LayoutParams(width, height);
			// lp.setMargins(left, top, 0, 0);
			// cameraView.setLayoutParams(lp);

		}
	}

	@JavascriptInterface
	public void desativaCamera() {
		if (cameraHardware != null) {
			try {
				cameraHardware.stopPreview();
			} catch (Exception e) {
			}
			try {
				cameraHardware.release();
			} catch (Exception e) {
			}
			cameraHardware = null;
			mainActivity.runOnUiThread(new Runnable() {
				@Override
				public void run() {
					cameraView.setVisibility(View.INVISIBLE);
					currLeft = -1;
				}
			});
		}
	}

	@JavascriptInterface
	public void tirarFoto(final int idFoto) {
		cameraHardware.takePicture(null, null, new PictureCallback() {

			@Override
			public void onPictureTaken(byte[] data, Camera camera) {

				File externalStoragePublicDirectory = Environment
						.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES);
				String pastaFotos = externalStoragePublicDirectory.getAbsolutePath();
				String pastaFotosAutoScan = pastaFotos+ "/AutoScan/";
				File folderFotosAutoScan=new File(pastaFotosAutoScan);
				if (!folderFotosAutoScan.exists())
					folderFotosAutoScan.mkdirs();
				String arq = pastaFotosAutoScan + idFoto + ".jpg";

				FileOutputStream outStream = null;
				try {
					outStream = new FileOutputStream(arq);
					outStream.write(data);
					outStream.close();
					mainActivity.execJS("window.AutoScan_onCameraShot("
							+ idFoto + ");");
				} catch (FileNotFoundException e) {
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				} finally {
				}
				cameraHardware.startPreview();
			}
		});
	}

	public void cameraPreviewOn(SurfaceHolder holder, int rotation) {
		if (cameraHardware == null)
			return;
		mainActivity.execJS("window.AutoScan_onCameraPreview();");
		cameraPreviewOff();
		try {

			android.hardware.Camera.CameraInfo info = new android.hardware.Camera.CameraInfo();
			android.hardware.Camera.getCameraInfo(cameraId, info);
			int degrees = 0;
			switch (rotation) {
			case Surface.ROTATION_0:
				degrees = 0;
				break;
			case Surface.ROTATION_90:
				degrees = 90;
				break;
			case Surface.ROTATION_180:
				degrees = 0;
				break;
			case Surface.ROTATION_270:
				degrees = 270;
				break;
			}

			int result;
			if (info.facing == Camera.CameraInfo.CAMERA_FACING_FRONT) {
				result = (info.orientation + degrees) % 360;
				result = (360 - result) % 360; // compensate the mirror
			} else { // back-facing
				result = (info.orientation - degrees + 360) % 360;
			}
			cameraHardware.setDisplayOrientation(result);
			cameraHardware.setPreviewDisplay(holder);
			cameraHardware.startPreview();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public void cameraPreviewOff() {
		try {
			cameraHardware.stopPreview();
		} catch (Exception e) {
		}
	}

	public void setCameraView(MainActivity mainActivity, SurfaceView cameraView) {
		this.mainActivity = mainActivity;
		this.cameraView = cameraView;
	}
}
