package com.example.zihaol.sleepdiary;

import android.content.Context;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class Questionire2 extends AppCompatActivity {

    private Button submit_button;
    private Context content;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_questionire2);

        submit_button=(Button)findViewById(R.id.back_button);
        submit_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                content=Questionire2.this;
                Intent intent = new Intent(content, MainActivity.class);
                content.startActivity(intent);
                finish();
            }
        });
    }
}
