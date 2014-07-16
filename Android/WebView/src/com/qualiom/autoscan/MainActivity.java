package com.qualiom.autoscan;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.res.AssetManager;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.hardware.Camera;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.media.MediaDrm.OnEventListener;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.OrientationEventListener;
import android.view.Surface;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.Window;
import android.webkit.ConsoleMessage;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.RelativeLayout;
import android.widget.LinearLayout.LayoutParams;
import android.widget.Toast;

public class MainActivity extends Activity implements SurfaceHolder.Callback {

	WebView web;
	ViewGroup container;
	SurfaceView cameraView;
	AutoScan autoScan;
	private OrientationEventListener orientationListener;

	@SuppressLint("SetJavaScriptEnabled")
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		if (container == null) {
			container = new RelativeLayout(this);
			container.setLayoutParams(new RelativeLayout.LayoutParams(
					RelativeLayout.LayoutParams.MATCH_PARENT,
					RelativeLayout.LayoutParams.MATCH_PARENT));
			web = new WebView(this);
			web.setLayoutParams(new LayoutParams(
					RelativeLayout.LayoutParams.MATCH_PARENT,
					RelativeLayout.LayoutParams.MATCH_PARENT));
			cameraView = new SurfaceView(this);
			cameraView.setVisibility(View.INVISIBLE);
			cameraView.getHolder().addCallback(this);
			cameraView.setOnClickListener(new View.OnClickListener() {
				public void onClick(View v) {
					execJS("window.AutoScan_onCameraClick();");
				}
			});
			container.addView(web);
			container.addView(cameraView);
			autoScan = new AutoScan();

			web.setWebViewClient(new MyBrowser());
			web.setWebChromeClient(new MyBrowser2());
			// web.loadUrl("http://www.bpmos.org/autoscan/autoscan.html");
			web.loadUrl("http://192.168.0.21:8080/autoscan/autoscan.html");
			WebSettings webSettings = web.getSettings();
			webSettings.setJavaScriptEnabled(true);
			addObjectCalculadora();

			orientationListener = new OrientationEventListener(this,
					SensorManager.SENSOR_DELAY_UI) {
				public void onOrientationChanged(int orientation) {
					// if (autoScan.initOk)
					// execJS("window.log('onOrientationChanged');");
					// forcarReapresentacaoCamera();
				}
			};
		}
		autoScan.setCameraView(this, cameraView);
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		setContentView(container);

	}

	boolean forcandoReapresentacaoCamera = false;

	private void forcarReapresentacaoCamera() {
		if (forcandoReapresentacaoCamera)
			return;
		forcandoReapresentacaoCamera = true;
		runOnUiThread(new Runnable() {
			@Override
			public void run() {
				// cameraView.invalidate();
				if (autoScan.initOk)
					execJS("window.log('forcandoReapresentacaoCamera');");
				forcandoReapresentacaoCamera = false;
				autoScan.cameraPreviewOn(cameraView.getHolder(),
						getWindowManager().getDefaultDisplay().getRotation());
				// cameraView.refreshDrawableState();
			}
		});

	}

	private void addObjectCalculadora() {
		web.addJavascriptInterface(autoScan, "AutoScan");
	}

	@Override
	public void onBackPressed() {
		if (web.canGoBack()) {
			web.goBack();
		} else {
			super.onBackPressed();
		}
	}

	// @Override
	// public boolean onCreateOptionsMenu(Menu menu) {
	// menu.add(1).setTitle("menu");
	// return false;
	// }

	@Override
	public void surfaceCreated(SurfaceHolder holder) {
		autoScan.cameraPreviewOn(holder, getWindowManager().getDefaultDisplay()
				.getRotation());
	}

	@Override
	public void surfaceChanged(SurfaceHolder holder, int arg1, int arg2,
			int arg3) {
		if (autoScan.initOk)
			execJS("window.log('surfaceChanged');");
		autoScan.cameraPreviewOn(holder, getWindowManager().getDefaultDisplay()
				.getRotation());
	}

	@Override
	public void surfaceDestroyed(SurfaceHolder arg0) {
		autoScan.cameraPreviewOff();
	}

	@Override
	public void onResume() {
		super.onResume();
		try {
			execJS("retomarConteudo();");
		} catch (Exception e) {
		}
		orientationListener.enable();
	}

	@Override
	protected void onPause() {
		try {
			execJS("pausarConteudo();");
		} catch (Exception e) {
		}
		orientationListener.disable();
		autoScan.cameraPreviewOff();
		super.onPause();
	}

	public void execJS(final String script) {
		runOnUiThread(new Runnable() {
			@Override
			public void run() {
				web.loadUrl("javascript:" + script);
			}
		});
	}

	class MyBrowser extends WebViewClient {

		@Override
		public boolean shouldOverrideUrlLoading(WebView view, String url) {
			view.loadUrl(url);
			// String data = readFile("teste.html");
			// view.loadData(data.toString(), "text/html", null);
			return true;
		}

		private String readFile(String arquivo) {
			try {
				InputStream stream = getAssets().open(arquivo);
				BufferedReader reader = new BufferedReader(
						new InputStreamReader(stream, "UTF-8"));
				StringBuilder str = new StringBuilder();
				int b = reader.read();
				while (b != -1) {
					str.append((char) b);
					b = reader.read();
				}
				reader.close();
				return str.toString();
			} catch (IOException e) {
				return "<html><body>" + e.getMessage() + "</body></html>";
			}
		}
	}

	class MyBrowser2 extends WebChromeClient {
		@Override
		public boolean onConsoleMessage(ConsoleMessage cm) {

			String msg = cm.message() + " -- From line " + cm.lineNumber()
					+ " of " + cm.sourceId();
			Log.e("web.console", msg);

			return super.onConsoleMessage(cm);
		}

	}
}