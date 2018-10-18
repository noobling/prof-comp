package com.example.zihaol.sleepdiary;

import android.support.annotation.NonNull;
import android.support.design.widget.NavigationView;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.Toast;

import com.readystatesoftware.systembartint.SystemBarTintManager;

public class Home_page extends AppCompatActivity implements View.OnClickListener {

    private ImageButton meun_button;

    private DrawerLayout drawerLayout;
    private SystemBarTintManager tintManager;
    private NavigationView navigationView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home_page);

        initView();
    }

    private void initView() {

        meun_button = (ImageButton) findViewById(R.id.menu_button);

        drawerLayout = (DrawerLayout) findViewById(R.id.activity_na);
        navigationView = (NavigationView) findViewById(R.id.left_nav);

        View headerView = navigationView.getHeaderView(0);
        meun_button.setOnClickListener(this);

        navigationView.setNavigationItemSelectedListener(new NavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                //item.setChecked(true);
                Toast.makeText(Home_page.this,item.getTitle().toString(),Toast.LENGTH_SHORT).show();
                //TODO:add link to each activity
                drawerLayout.closeDrawer(navigationView);
                return true;
            }
        });

    }

    @Override
    public void onClick(View v) {

    }
}
