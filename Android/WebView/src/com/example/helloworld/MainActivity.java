package com.example.helloworld;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.res.AssetManager;
import android.content.res.Resources;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.View;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.webkit.ConsoleMessage;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.RelativeLayout;
import android.widget.LinearLayout.LayoutParams;

public class MainActivity extends Activity implements SurfaceHolder.Callback {

	WebView web;
	ViewGroup container;
	SurfaceView cameraView;
	AutoScan autoScan;

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
			container.addView(web);
			container.addView(cameraView);
			autoScan = new AutoScan();

			web.setWebViewClient(new MyBrowser());
			web.setWebChromeClient(new MyBrowser2());
			web.loadUrl("http://www.google.com/");

			WebSettings webSettings = web.getSettings();
			webSettings.setJavaScriptEnabled(true);
			addObjectCalculadora();
		}
		autoScan.setCameraView(this, cameraView);

		setContentView(container);

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
		autoScan.cameraPreviewOn(holder, getWindowManager().getDefaultDisplay()
				.getRotation());
	}

	@Override
	public void surfaceDestroyed(SurfaceHolder arg0) {
		autoScan.cameraPreviewOff();
	}

	@Override
	protected void onPause() {
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
			String data = readFile("teste.html");
			view.loadData(data.toString(), "text/html", null);
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