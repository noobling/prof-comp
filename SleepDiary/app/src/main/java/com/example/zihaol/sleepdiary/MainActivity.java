package com.example.zihaol.sleepdiary;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.os.Build;
import android.support.annotation.NonNull;
import android.support.design.widget.NavigationView;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.Toast;

import com.readystatesoftware.systembartint.SystemBarTintManager;

public class MainActivity extends AppCompatActivity implements View.OnClickListener{

    private Button start;
    private ImageButton meun_button;

    private DrawerLayout drawerLayout;
    private SystemBarTintManager tintManager;
    private NavigationView navigationView;

    private Context content;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        setContentView(R.layout.activity_main);

        //initWindow();

        initView();
    }

    private void initView() {
        start = (Button) findViewById(R.id.start);
        meun_button = (ImageButton) findViewById(R.id.menu_button);

        drawerLayout = (DrawerLayout) findViewById(R.id.activity_na);
        navigationView = (NavigationView) findViewById(R.id.left_nav);

        View headerView = navigationView.getHeaderView(0);
        start.setOnClickListener(this);
        meun_button.setOnClickListener(this);

        navigationView.setNavigationItemSelectedListener(new NavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                //item.setChecked(true);
                Toast.makeText(MainActivity.this,item.getTitle().toString(),Toast.LENGTH_SHORT).show();
                //TODO:add link to each activity
                drawerLayout.closeDrawer(navigationView);
                return true;
            }
        });

    }
    @Override
    public void onClick(View v) {
        switch (v.getId()){

            case R.id.menu_button:
                if (drawerLayout.isDrawerOpen(navigationView)){
                    drawerLayout.closeDrawer(navigationView);
                }else{
                    drawerLayout.openDrawer(navigationView);
                }
                break;

            case R.id.start:
                content = MainActivity.this;
                Intent intent = new Intent(content, Login.class);
                content.startActivity(intent);
                break;
        }
    }






}