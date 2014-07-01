package com.example.aprendendodoisactivity;

import java.util.TimerTask;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.Fragment;
import android.app.ListFragment;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.LinearLayout.LayoutParams;
import android.widget.RelativeLayout;

@SuppressLint("NewApi")
public class Placas_a_fotografar_Fragmento extends ListFragment {

	@Override
	public View onCreateView(LayoutInflater inflater, ViewGroup container,
			Bundle savedInstanceState) {

		Activity activity = getActivity();
		Placas_a_fotografar_Adapter adapter = new Placas_a_fotografar_Adapter(
				activity);
		setListAdapter(adapter);

		RelativeLayout layout = new RelativeLayout(container.getContext());
		layout.setLayoutParams(new LayoutParams(
				RelativeLayout.LayoutParams.MATCH_PARENT,
				RelativeLayout.LayoutParams.MATCH_PARENT));
		ListView list = new ListView(layout.getContext());
		list.setLayoutParams(new LayoutParams(
				RelativeLayout.LayoutParams.WRAP_CONTENT,
				RelativeLayout.LayoutParams.WRAP_CONTENT));
		list.setId(android.R.id.list);
		Button cadastrar = new Button(layout.getContext());
		cadastrar.setLayoutParams(new LayoutParams(
				RelativeLayout.LayoutParams.MATCH_PARENT,
				RelativeLayout.LayoutParams.MATCH_PARENT));
		layout.addView(list);
		//layout.addView(cadastrar);

		return layout;
	}
}
