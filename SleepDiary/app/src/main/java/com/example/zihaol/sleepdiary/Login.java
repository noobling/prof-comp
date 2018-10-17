package com.example.zihaol.sleepdiary;

import android.content.Context;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

public class Login extends AppCompatActivity {

    private EditText email;
    private EditText password;
    private Button submit;

    private String myE;
    private String myP;

    private String LoginURL="http://sleepdiaryapp.herokuapp.com/api/login";

    private Context content;


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

                /*String filename = "test";
                FileOutputStream outputStream;

                try {
                    outputStream = openFileOutput(filename, Context.MODE_APPEND);
                    outputStream.write(myE.getBytes());
                    outputStream.close();
                } catch (Exception e) {
                    e.printStackTrace();
                }*/

                webrequest(myE,myP);

                Toast.makeText(Login.this, myE+" "+myP, Toast.LENGTH_SHORT).show();
                content=Login.this;
                Intent intent = new Intent(content, Questionire.class);
                content.startActivity(intent);
            }
        });

    }

//网络上传 9月29日尝试
    private void webrequest(String email,String password){
        String msg="";
        try {
            HttpURLConnection connect = (HttpURLConnection) new URL(LoginURL).openConnection();

            connect.setRequestMethod("POST");

            connect.setReadTimeout(5000);
            connect.setConnectTimeout(5000);

            connect.setDoOutput(true);
            connect.setDoInput(true);

            connect.setUseCaches(false);

            //String data = "email"+ URLEncoder.encode(email, "UTF-8")+"password"+ URLEncoder.encode(password, "UTF-8");

           // OutputStream out = connect.getOutputStream();
            //out.write(data.getBytes());
            //out.flush();


            if (connect.getResponseCode() == 200) {
                // 获取响应的输入流对象 get response object 'is'
                InputStream is = connect.getInputStream();
                // 创建字节输出流对象 create output stram object 'message'
                ByteArrayOutputStream message = new ByteArrayOutputStream();
                // 定义读取的长度
                int len = 0;
                // 定义缓冲区 define buffer contain
                byte buffer[] = new byte[1024];
                // 按照缓冲区的大小，循环读取
                while ((len = is.read(buffer)) != -1) {
                    // 根据读取的长度写入到os对象中
                    message.write(buffer, 0, len);
                }
                // 释放资源
                is.close();
                message.close();
                // 返回字符串
                msg = new String(message.toByteArray());

            }
        }catch (Exception e){
            e.printStackTrace();
        }
    }





}
