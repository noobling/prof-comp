package com.example.zihaol.sleepdiary;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Editable;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class Login extends AppCompatActivity {

    private EditText email;
    private EditText password;
    private Button submit;

    private String myE;
    private String myP;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        initview();
    }

    private void initview(){
        email=(EditText)findViewById(R.id.email);
        password=(EditText) findViewById(R.id.password);
        submit=(Button)findViewById(R.id.submit);


        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                myE=email.getText().toString().trim();
                myP=password.getText().toString().trim();


                Toast.makeText(Login.this, myE+" "+myP, Toast.LENGTH_SHORT).show();
            }
        });

    }








}
