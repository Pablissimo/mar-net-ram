package com.example.aprendendodoisactivity;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.FragmentTransaction;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Advanceable;
import android.widget.LinearLayout;

@SuppressLint("NewApi")
public class MeuPrimeiroActivity extends Activity {

	public static int fragmento_usar = 1;
	private Placas_a_fotografar_Fragmento fragmento_Placa_a_fotogracar=new Placas_a_fotografar_Fragmento();
	//private MeuFragmento2 fragment2=new MeuFragmento2();

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		
		setContentView(R.layout.activity_meu_primeiro);
		
		getFragmentManager().beginTransaction()

		 .replace(R.id.lugar_do_fragmento, fragmento_Placa_a_fotogracar).commit();
		
		//lnr.add
		//getFragmentManager().beginTransaction().
		//hide(		fragment1).
		//show(		fragment2).
		//commit();
		//fragment1 = new MeuFragmento1();
		// = new MeuFragmento1();
		// getFragmentManager().beginTransaction()

		// .replace(R.id.fragmento, new MeuFragmento()).commit();
	}

	public void clicou_no_botao(View v) {
	/*FragmentTransaction tran = getFragmentManager().beginTransaction();
		if (fragmento_usar == 1) {
			fragmento_usar = 2;
			tran.replace(R.id.lugar_do_fragmento, fragment2).addToBackStack(null);
		} else {
			fragmento_usar = 1;
			tran.replace(R.id.lugar_do_fragmento, fragment1);
		}
		tran.commit();*/
		// Intent intent = new Intent(this, Meu_segundo_activity.class);
		// startActivity(intent);
	}
}
