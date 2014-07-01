package com.example.listviewcustom;

import java.util.ArrayList;

import org.w3c.dom.Text;

import android.content.Context;
import android.graphics.Color;
import android.text.style.TextAppearanceSpan;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.LinearLayout.LayoutParams;
import android.widget.TextView;

public class AdapterListView extends BaseAdapter {

	private ArrayList<ItemListView> itens;
	private Context context;

	public AdapterListView(Context context, ArrayList<ItemListView> itens) {
		this.context = context;
		// Itens que preencheram o listview
		this.itens = itens;
		// responsavel por pegar o Layout do item.
	}

	/**
	 * Retorna a quantidade de itens
	 * 
	 * @return
	 */
	public int getCount() {
		return itens.size();
	}

	/**
	 * Retorna o item de acordo com a posicao dele na tela.
	 * 
	 * @param position
	 * @return
	 */
	public ItemListView getItem(int position) {
		return itens.get(position);
	}

	/**
	 * Sem implementação
	 * 
	 * @param position
	 * @return
	 */
	public long getItemId(int position) {
		return position;
	}

	public View getView(int position, View view, ViewGroup parent) {
		ItemSuporte itemHolder;
		// se a view estiver nula (nunca criada), inflamos o layout nela.
		if (view == null) {
			// infla o layout para podermos pegar as views
			view = criaView();

			// cria um item de suporte para não precisarmos sempre
			// inflar as mesmas informacoes
			itemHolder = new ItemSuporte();
			itemHolder.txtTitle = ((TextView) view.findViewById(R.id.text));
			itemHolder.imgIcon = ((ImageView) view
					.findViewById(R.id.imagemview));

			// define os itens na view;
			view.setTag(itemHolder);
		} else {
			// se a view já existe pega os itens.
			itemHolder = (ItemSuporte) view.getTag();
		}

		// pega os dados da lista
		// e define os valores nos itens.
		ItemListView item = itens.get(position);
		itemHolder.txtTitle.setText(item.getTexto());
		itemHolder.imgIcon.setImageResource(item.getIconeRid());

		// retorna a view com as informações
		return view;
	}

	private View criaView() {
		LinearLayout l1 = new LinearLayout(context);
		l1.setLayoutParams(new LinearLayout.LayoutParams(
				LinearLayout.LayoutParams.MATCH_PARENT,
				LinearLayout.LayoutParams.MATCH_PARENT));
		l1.setOrientation(LinearLayout.HORIZONTAL);

		ImageView imagemview = new ImageView(context);
		imagemview.setLayoutParams(new LinearLayout.LayoutParams(
				LinearLayout.LayoutParams.WRAP_CONTENT,
				LinearLayout.LayoutParams.MATCH_PARENT));
		imagemview.setId(R.id.imagemview);

		TextView text = new TextView(context);
		LayoutParams l = new LinearLayout.LayoutParams(
				LinearLayout.LayoutParams.MATCH_PARENT,
				LinearLayout.LayoutParams.MATCH_PARENT);
		l.setMargins(5, 0, 0, 0);
		text.setLayoutParams(l);
		text.setGravity(Gravity.CENTER_VERTICAL);
		text.setTextColor(Color.GRAY);
		text.setId(R.id.text);
		l1.addView(imagemview);
		l1.addView(text);
		return l1;
	}

	/**
	 * Classe de suporte para os itens do layout.
	 */
	private class ItemSuporte {

		ImageView imgIcon;
		TextView txtTitle;
	}

}