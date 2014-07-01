package com.example.aprendendodoisactivity;

import android.app.Activity;
import android.content.Context;
import android.database.DataSetObserver;
import android.os.Build;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout.LayoutParams;
import android.widget.LinearLayout;
import android.widget.ListAdapter;
import android.widget.TextView;

public class Placas_a_fotografar_Adapter implements ListAdapter {

	static Veiculo[] veiculos = new Veiculo[2];
	private Activity activity;
	static {
		veiculos[0] = new Veiculo();
		veiculos[0].placa = "KDX-1234";
		veiculos[0].modelo = "LOGAN";
		veiculos[0].proprietario = "ANA MARIA";
		veiculos[1] = new Veiculo();
		veiculos[1].placa = "OAP-5678";
		veiculos[1].modelo = "FERRARI";
		veiculos[1].proprietario = "POLIANA";
	}

	public Placas_a_fotografar_Adapter(Activity activity) {
		this.activity = activity;
	}

	@Override
	public int getCount() {
		return veiculos.length;
	}

	@Override
	public Object getItem(int position) {
		return veiculos[position];
	}

	@Override
	public long getItemId(int position) {
		return position;
	}

	@Override
	public int getItemViewType(int position) {
		return 0;
	}

	@Override
	public int getViewTypeCount() {
		return 1;
	}

	@Override
	public View getView(int position, View view, ViewGroup parent) {
		if (view == null) {
			view = new VeiculoItemView(activity, null);
		}
		VeiculoItemView item = (VeiculoItemView) view;
		Veiculo veiculo = (Veiculo) getItem(position);
		item.placa.setText(veiculo.placa);
		item.modelo.setText(veiculo.modelo);
		item.proprietario.setText(veiculo.proprietario);
		return view;
	}

	@Override
	public boolean hasStableIds() {
		return true;
	}

	@Override
	public boolean isEmpty() {
		return veiculos.length == 0;
	}

	@Override
	public void registerDataSetObserver(DataSetObserver datasetObserver) {
		// TODO Auto-generated method stub
	}

	@Override
	public void unregisterDataSetObserver(DataSetObserver datasetObserver) {
		// TODO Auto-generated method stub

	}

	@Override
	public boolean areAllItemsEnabled() {
		return true;
	}

	@Override
	public boolean isEnabled(int position) {
		return true;
	}
}

class Veiculo {
	String placa;
	String modelo;
	String proprietario;
}

class VeiculoItemView extends LinearLayout {
	TextView placa;
	TextView modelo;
	TextView proprietario;

	public VeiculoItemView(Context context, AttributeSet attrs) {
		super(context, attrs);

		this.setLayoutParams(new LayoutParams(
				LinearLayout.LayoutParams.MATCH_PARENT,
				LinearLayout.LayoutParams.MATCH_PARENT));		

		placa = new TextView(context);
		placa.setTextSize(25);
		placa.setLayoutParams(new LayoutParams(
				LinearLayout.LayoutParams.WRAP_CONTENT,
				LinearLayout.LayoutParams.WRAP_CONTENT));
		// placa.setTextAppearance(context, R.id);
		// android:textAppearance="?android:attr/textAppearanceLarge" />

		modelo = new TextView(context);
		placa.setTextSize(20);
		modelo.setLayoutParams(new LayoutParams(
				LinearLayout.LayoutParams.WRAP_CONTENT,
				LinearLayout.LayoutParams.WRAP_CONTENT));

		proprietario = new TextView(context);
		proprietario.setLayoutParams(new LayoutParams(
				LinearLayout.LayoutParams.WRAP_CONTENT,
				LinearLayout.LayoutParams.WRAP_CONTENT));

		this.addView(placa);
		this.addView(modelo);
		this.addView(proprietario);

		// xmlns:android="http://schemas.android.com/apk/res/android"
		//
		// android:layout_width="match_parent"
		// android:layout_height="match_parent"
		// android:orientation="vertical" >
		//
		// <TextView
		// android:id="@+id/placa"
		// android:layout_width="wrap_content"
		// android:layout_height="wrap_content"
		// android:textAppearance="?android:attr/textAppearanceLarge" />
		//
		// <TextView
		// android:id="@+id/modelo"
		// android:layout_width="wrap_content"
		// android:layout_height="wrap_content"
		// android:textAppearance="?android:attr/textAppearanceMedium" />
		//
		// <TextView
		// android:id="@+id/proprietario"
		// android:layout_width="wrap_content"
		// android:layout_height="wrap_content"
		// />
	}

}