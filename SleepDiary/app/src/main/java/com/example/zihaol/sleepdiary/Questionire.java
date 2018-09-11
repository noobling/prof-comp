package com.example.zihaol.sleepdiary;

import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.TextView;
import android.widget.Toast;

public class Questionire extends AppCompatActivity {


    private TextView Date_Of_Record;
    private Button NextQ;
    private Context content;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_questionire);

        initView();
    }

    private void initView(){
        Date_Of_Record=(TextView)findViewById(R.id.tv_time1);
        NextQ=(Button)findViewById(R.id.btn_submit) ;

        Date_Of_Record.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                setDateAction();
            }
        });

        NextQ.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                content=Questionire.this;
                Intent intent = new Intent(content, Questionire2.class);
                content.startActivity(intent);
            }
        });
    }



    private void setDateAction(){
        final DatePicker dpBirth = (DatePicker) getLayoutInflater().inflate(R.layout.dialog_edit_date, null);
        Toast.makeText(Questionire.this, "111", Toast.LENGTH_SHORT).show();
        new AlertDialog.Builder(Questionire.this)
                .setTitle("Date Of Sleep")
                .setView(dpBirth)
                .setPositiveButton("Submit", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        Date_Of_Record.setText(dpBirth.getYear() + "/" + (dpBirth.getMonth() % 12 + 1) + "/" + dpBirth.getDayOfMonth());

                    }
                })
                .setNegativeButton("Cancel", null)
                .create()
                .show();
    }
}
