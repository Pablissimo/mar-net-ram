package com.example.fotodez;

import java.io.Closeable;
import java.io.IOException;

import android.app.Activity;
import android.content.res.Configuration;
import android.hardware.Camera;
import android.view.SurfaceHolder;
import android.view.SurfaceView;

public class CameraAutoScan implements SurfaceHolder.Callback {
	private Camera camera;
	private SurfaceView view;
	private Activity activity;

	CameraAutoScan(Activity activity, int surfaceViewId) {
		this.activity=activity;
		camera = Camera.open();
		view = (SurfaceView) (activity.findViewById(surfaceViewId));
		view.getHolder().addCallback(this);
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

}
