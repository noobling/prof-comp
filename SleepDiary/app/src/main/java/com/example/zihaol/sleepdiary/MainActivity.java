package com.example.zihaol.sleepdiary;

import android.content.Context;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private Button submit_button;
    private EditText code_edit;
    private String Code;
    private Context content;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initView();
    }
    private void initView(){
        submit_button=(Button)findViewById(R.id.btn_login);
        code_edit=(EditText)findViewById(R.id.code) ;


        submit_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Code=code_edit.getText().toString();
                content=MainActivity.this;
                Intent intent = new Intent(content, Questionire.class);
                intent.putExtra("code", Code);
                content.startActivity(intent);
                finish();
               // intent.putExtra("username", "this is user name...");
                Toast.makeText(MainActivity.this, "Welcome "+Code, Toast.LENGTH_SHORT).show();
            }
        });
    }
}
