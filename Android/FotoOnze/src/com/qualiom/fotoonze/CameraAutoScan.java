package com.qualiom.fotoonze;

import java.io.Closeable;
import java.io.IOException;

import android.app.Activity;
import android.hardware.Camera;
import android.view.Surface;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;

public class CameraAutoScan implements SurfaceHolder.Callback {
	private Camera camera;
	private SurfaceView surface;
	private Activity activity;
private int cameraId=0;

	CameraAutoScan(Activity activity, SurfaceView surface) {
		this.activity=activity;
		camera = Camera.open(cameraId);
		this.surface=surface; 
		surface.getHolder().addCallback(this);
	}

	@Override
	public void surfaceChanged(SurfaceHolder arg0, int arg1, int arg2, int arg3) {
		// TODO Auto-generated method stub

	}

	@Override
	public void surfaceCreated(SurfaceHolder holder) {
		try {
			camera.setPreviewDisplay(holder);
			camera.startPreview();
			// Camera.Parameters parameters = camera.getParameters();
			//if (activity.getResources().getConfiguration().orientation != Configuration.ORIENTATION_LANDSCAPE) {
		    //    parameters.set("orientation", "portrait");
		    //    camera.setDisplayOrientation(90);
		    //  }
		} catch (IOException e) {
			e.printStackTrace();
		}
	}


	@Override
	public void surfaceDestroyed(SurfaceHolder arg0) {
		desconectaCamera();
	}
	
	private void desconectaCamera() {
		if (camera != null) {
			try {
				camera.release();
			} catch (Exception e) {
			} finally {
				camera = null;
			}
		}
	}

	public void dispose() {
		desconectaCamera();
		
	}

	public  void ajustCameraDisplayOrientation() {
	     android.hardware.Camera.CameraInfo info =new android.hardware.Camera.CameraInfo();
	     android.hardware.Camera.getCameraInfo(cameraId, info);
	     int rotation = activity.getWindowManager().getDefaultDisplay()
	             .getRotation();
	     int degrees = 0;
	     switch (rotation) {
	         case Surface.ROTATION_0: degrees = 90; break;
	         case Surface.ROTATION_90: degrees = 90; break;
	         case Surface.ROTATION_180: degrees = 180; break;
	         case Surface.ROTATION_270: degrees = 270; break;
	     }

	     int result;
	     if (info.facing == Camera.CameraInfo.CAMERA_FACING_FRONT) {
	         result = (info.orientation + degrees) % 360;
	         result = (360 - result) % 360;  // compensate the mirror
	     } else {  // back-facing
	         result = (info.orientation - degrees + 360) % 360;
	     }
	     camera.setDisplayOrientation(result);
	 }
}
