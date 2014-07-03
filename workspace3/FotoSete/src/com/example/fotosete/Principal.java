package com.example.fotosete;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import android.annotation.SuppressLint;
import android.annotation.TargetApi;
import android.app.Activity;
import android.content.Intent;
import android.content.res.Configuration;
import android.hardware.Camera;
import android.hardware.Camera.PictureCallback;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.Surface;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;
import android.widget.Button;

@SuppressLint("NewApi") 
public class Principal extends Activity implements SurfaceHolder.Callback {
	
	private Camera filmadoraCamera;
	private SurfaceView filmadoraView;
	int TAKE_PHOTO_CODE = 0;
	public static int count=0;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_principal);
		filmadoraCamera = Camera.open();
		filmadoraView = (SurfaceView) findViewById(R.id.filmadora);
		filmadoraView.getHolder().addCallback(this);
		
		//here,we are making a folder named picFolder to store pics taken by the camera using this application
        final String dir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES) + "/picFolder/"; 
        File newdir = new File(dir); 
        newdir.mkdirs();
        

    Button capture = (Button) findViewById(R.id.button1);
    capture.setOnClickListener(new View.OnClickListener() {
        public void onClick(View v) {

            filmadoraCamera.takePicture(null, null, new PictureCallback() {
				
				@Override
				public void onPictureTaken(byte[] data, Camera camera) {
					// TODO Auto-generated method stub
					FileOutputStream outStream = null;
		            try{
		                outStream = new FileOutputStream("/sdcard/polaroide.jpg");
		                outStream.write(data);
		                outStream.close();
		                String TAG = "ENTROU,ENTROU,ENTROU,ENTROU,ENTROU,ENTROU,ENTROU,ENTROU,ENTROU,ENTROU,ENTROU,";
						Log.d(TAG , "onPictureTaken - wrote bytes: " + data.length);
		            } catch (FileNotFoundException e) {
		                e.printStackTrace();
		            } catch (IOException e) {
		                e.printStackTrace();
		            } finally {
		            }
					filmadoraCamera.startPreview();
				}
			});
        }
    });
	}


@Override
protected void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);

    if (requestCode == TAKE_PHOTO_CODE && resultCode == RESULT_OK) {
        Log.d("CameraDemo", "Pic saved");
    }
}
	@Override
	protected void onDestroy() {
		super.onDestroy();
		if (filmadoraCamera != null) {
			filmadoraCamera.release();
		}
	}
	@Override
	public void surfaceCreated(SurfaceHolder holder) {
		System.out.println("CREATE-SURFACE");
		try {
			filmadoraCamera.setPreviewDisplay(holder);
			filmadoraCamera.startPreview();
			 Camera.Parameters parameters = filmadoraCamera.getParameters();
			if (this.getResources().getConfiguration().orientation != Configuration.ORIENTATION_LANDSCAPE) {
		        parameters.set("orientation", "portrait");
		        filmadoraCamera.setDisplayOrientation(90);
		      }
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void surfaceChanged(SurfaceHolder holder,  int format, int width, int height) {
		if (holder.getSurface() != null) {
			try {
				filmadoraCamera.stopPreview();
			
			} catch (Exception e) {
			}
			try {

				filmadoraCamera.setPreviewDisplay(holder);
				filmadoraCamera.startPreview();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	@Override
	public void surfaceDestroyed(SurfaceHolder arg0) {
		super.onDestroy();
	}
	@Override
	protected void onPause() {
		super.onPause();
		if (filmadoraCamera != null) {
			filmadoraCamera.stopPreview();
		}
	}
	@TargetApi(Build.VERSION_CODES.GINGERBREAD) @SuppressLint("NewApi") 
	public static void setCameraDisplayOrientation(Activity activity,int cameraId, android.hardware.Camera camera) {
	     android.hardware.Camera.CameraInfo info =new android.hardware.Camera.CameraInfo();
	     android.hardware.Camera.getCameraInfo(cameraId, info);
	     int rotation = activity.getWindowManager().getDefaultDisplay()
	             .getRotation();
	     int degrees = 0;
	     switch (rotation) {
	         case Surface.ROTATION_0: degrees = 0; break;
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
