package com.example.sensor3;

import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.widget.TextView;

public class MainActivity extends Activity implements SensorEventListener {

    private SensorManager sensorManager;
    private Sensor sensor;
    private TextView x;
    private TextView y;
    private TextView z;
    @SuppressWarnings({ "deprecation" })
	@Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        sensorManager = (SensorManager) getSystemService(SENSOR_SERVICE);
        sensor = sensorManager.getDefaultSensor(Sensor.TYPE_ORIENTATION);
        sensorManager.registerListener(this, sensor, SensorManager.SENSOR_DELAY_NORMAL);
        x = (TextView) findViewById(R.id.textView2);
        y = (TextView) findViewById(R.id.textView4);
        z = (TextView) findViewById(R.id.textView6);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.layout.activity_main, menu);
        return true;
    }

    @Override
    public void onAccuracyChanged(Sensor arg0, int arg1) {
        
    }

    @Override
    public void onSensorChanged(SensorEvent sensorEvent) {
        x.setText(sensorEvent.values[0]+"");
        y.setText(sensorEvent.values[1]+"");
        z.setText(sensorEvent.values[2]+"");
        
    }
}