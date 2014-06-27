package com.example.fotosete;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

import android.app.Activity;
import android.content.Intent;
import android.hardware.Camera;
import android.hardware.Camera.PictureCallback;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;
import android.widget.Button;

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
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void surfaceChanged(SurfaceHolder holder,  int format, int width, int height) {
		System.out.println("ZERO");
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
}
