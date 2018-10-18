package com.example.zihaol.sleepdiary;

import android.content.Context;
import android.content.Intent;
import android.os.AsyncTask;
import android.support.annotation.NonNull;
import android.support.design.widget.NavigationView;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.Toast;

import com.readystatesoftware.systembartint.SystemBarTintManager;

import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.List;
import java.util.Map;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.FormBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;


public class Login extends AppCompatActivity implements View.OnClickListener {

    private EditText email;
    private EditText password;
    private Button submit;

    private ImageButton meun_button;
    private DrawerLayout drawerLayout;
    private SystemBarTintManager tintManager;
    private NavigationView navigationView;

    private String myE;
    private String myP;
    private String result;
    private String LoginURL = "https://sleepdiaryapp.herokuapp.com/api/login";

    private Context content;


    final OkHttpClient client = new OkHttpClient();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        initview();
    }

    private void initview() {
        email = (EditText) findViewById(R.id.email);
        password = (EditText) findViewById(R.id.password);
        submit = (Button) findViewById(R.id.submit);

        meun_button = (ImageButton) findViewById(R.id.menu_button);
        drawerLayout = (DrawerLayout) findViewById(R.id.activity_na);
        navigationView = (NavigationView) findViewById(R.id.left_nav);
        View headerView = navigationView.getHeaderView(0);
        meun_button.setOnClickListener(this);

        navigationView.setNavigationItemSelectedListener(new NavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                //item.setChecked(true);
                Toast.makeText(Login.this,item.getTitle().toString(),Toast.LENGTH_SHORT).show();
                //TODO:add link to each activity
                drawerLayout.closeDrawer(navigationView);
                return true;
            }
        });


        submit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                myE = email.getText().toString().trim();
                myP = password.getText().toString().trim();


                QueryAddressTask queryAddressTask = new QueryAddressTask();// create a QAT object
                queryAddressTask.execute(myE,myP); //execute the  AsyncTask
            }
        });

    }

    public String postRequest(String email, String password) throws IOException{

        RequestBody formBody = new FormBody.Builder()
                .add("email",email)
                .add("password",password)
                .build();

        final Request request = new Request.Builder()
                .url(LoginURL)
                .post(formBody)
                .build();

        Response response = null;

        response = client.newCall(request).execute();
        if (response.isSuccessful()) {
            // Log.i("WY","Response Message:" + response.body().string());
            result=response.body().string();
            //Log.d("result:", result);


        } else {
            throw new IOException("Unexpected code " + response);
        }
        return result;
    }
    class QueryAddressTask extends AsyncTask<String, Integer, String> {
        @Override
        protected String doInBackground(String... params) {
            try {
                result = postRequest(params[0],params[1]);
                String aaaa=result.substring(0,9);
                Log.d("aaaa:", aaaa);

            } catch (Exception e) {
                e.printStackTrace();
            }//Pass the 'result to onPostExecute'
            return result;
        }

        @Override
        protected void onPostExecute(String result) {
            if (result.substring(0,9).equals("{\"token\":")) {
                Toast.makeText(Login.this, "Login Success", Toast.LENGTH_SHORT).show();
            }
            else {
                Toast.makeText(Login.this, "These credentials do not match our records.\n", Toast.LENGTH_SHORT).show();
            }
        }
    }



    @Override
    public void onClick(View v) {
        switch (v.getId()) {

            case R.id.menu_button:
                if (drawerLayout.isDrawerOpen(navigationView)) {
                    drawerLayout.closeDrawer(navigationView);
                } else {
                    drawerLayout.openDrawer(navigationView);
                }
                break;
        }
    }
}