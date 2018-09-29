package com.example.zihaol.sleepdiary;

import android.animation.TimeAnimator;
import android.app.AlertDialog;
import android.app.TimePickerDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.graphics.Matrix;
import android.os.Build;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.TranslateAnimation;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.TimePicker;
import android.widget.Toast;

import com.example.zihaol.adatper.PageAdatper;

import java.util.ArrayList;


public class Questionire extends AppCompatActivity implements View.OnClickListener,
        ViewPager.OnPageChangeListener {
    private TextView date_of_record;
    private TextView into_bed;
    private TextView time_try_sleep;
    private TextView time_out_bed;
    private TextView long_asleep;

    private Button NextQ;
    private String min,hour;
    private TimePicker dpTime;

    private ViewPager vpager;
    private ImageView img_cursor;
    private TextView tv_one;
    private TextView tv_two;
    private TextView tv_three;

    private LayoutInflater inflater;

    /* Moving  */
    private ArrayList<View> listViews;
    private int offset = 0;//picture offset
    private int currIndex = 0;//current page index
    private int bmpWidth;// picture length
    private int one = 0; //move one page distance
    private int two = 0; //two page distance

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_questionire);
        initView();
    }

    private void initView(){
        //找viewpager
        vpager = (ViewPager) findViewById(R.id.vpager);
        tv_one = (TextView) findViewById(R.id.tv_one);
        tv_two = (TextView) findViewById(R.id.tv_two);
        tv_three = (TextView) findViewById(R.id.tv_three);

        img_cursor = (ImageView) findViewById(R.id.img_cursor);



        //Animation
        bmpWidth = BitmapFactory.decodeResource(getResources(), R.mipmap.line).getWidth();// get Image Length
        DisplayMetrics dm = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(dm);
        int screenW = dm.widthPixels;
        offset = (screenW / 3 - bmpWidth) / 2;// calculate displacement
        Matrix matrix = new Matrix();
        matrix.postTranslate(offset, 0);
        img_cursor.setImageMatrix(matrix);// initialize position
        //distance
        one = offset * 2 + bmpWidth;// Move one page 1->2 OR   2->3
        two = one * 2;// Move two pages 1->3

        //fill View into ViewPager and set onclick listner
        listViews = new ArrayList<View>();

        inflater = LayoutInflater.from(this);
        View view1 = inflater.inflate(R.layout.view_one, null);
        View view2 = inflater.inflate(R.layout.view_two, null);
        View view3 = inflater.inflate(R.layout.view_three, null);
        listViews.add(view1);
        listViews.add(view2);
        listViews.add(view3);

        /*时间监听*/
        date_of_record=view1.findViewById(R.id.tv1);
        into_bed=view1.findViewById(R.id.tv2);
        time_try_sleep=view1.findViewById(R.id.tv3);
        time_out_bed=view1.findViewById(R.id.tv4);
        long_asleep=view1.findViewById(R.id.tv5);

        date_of_record.setOnClickListener(this);
        into_bed.setOnClickListener(this);
        time_try_sleep.setOnClickListener(this);
        time_out_bed.setOnClickListener(this);
        long_asleep.setOnClickListener(this);

        vpager.setAdapter(new PageAdatper(listViews));
        vpager.setCurrentItem(0);
        tv_one.setOnClickListener(this);
        tv_two.setOnClickListener(this);
        tv_three.setOnClickListener(this);

        vpager.addOnPageChangeListener(this);


    }



    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.tv_one:
                vpager.setCurrentItem(0);
                break;
            case R.id.tv_two:
                vpager.setCurrentItem(1);
                break;
            case R.id.tv_three:
                vpager.setCurrentItem(2);
                break;
            case R.id.tv1:
               setDateAction(date_of_record);
                break;
            case  R.id.tv2:
                setTimeAction(into_bed);
                break;
            case  R.id.tv3:
                setTimeAction(time_try_sleep);
                break;
            case  R.id.tv4:
                setTimeAction(time_out_bed);
                break;
            case  R.id.tv5:
                setTimeAction(long_asleep);
                break;
        }
    }

    @Override
    public void onPageSelected(int index) {
        Animation animation = null;
        switch (index) {
            case 0:
                if (currIndex == 1) {
                    animation = new TranslateAnimation(one, 0, 0, 0);
                } else if (currIndex == 2) {
                    animation = new TranslateAnimation(two, 0, 0, 0);
                }
                break;
            case 1:
                if (currIndex == 0) {
                    animation = new TranslateAnimation(offset, one, 0, 0);
                } else if (currIndex == 2) {
                    animation = new TranslateAnimation(two, one, 0, 0);
                }
                break;
            case 2:
                if (currIndex == 0) {
                    animation = new TranslateAnimation(offset, two, 0, 0);
                } else if (currIndex == 1) {
                    animation = new TranslateAnimation(one, two, 0, 0);
                }
                break;
        }
        currIndex = index;
        animation.setFillAfter(true);
        animation.setDuration(300); //animation time
        img_cursor.startAnimation(animation);//animation start
    }
    @Override
    public void onPageScrollStateChanged(int i) {
    }
    @Override
    public void onPageScrolled(int i, float v, int i1) {
    }



/*Date Picker*/
    private void setDateAction(final TextView tv){

        final DatePicker dpBirth = (DatePicker) getLayoutInflater().inflate(R.layout.dialog_edit_date, null);
        new AlertDialog.Builder(Questionire.this)
                .setTitle("Date Of Sleep")
                .setView(dpBirth)
                .setPositiveButton("Submit", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                       tv.setText(dpBirth.getYear() + "/" + (dpBirth.getMonth() % 12 + 1) + "/" + dpBirth.getDayOfMonth());
                        tv.setTextColor(Color.parseColor("#ff000000"));
                    }
                })
                .setNegativeButton("Cancel", null)
                .create()
                .show();
    }

/*Time Picker*/
        private void setTimeAction(final TextView tv){

            dpTime=(TimePicker) getLayoutInflater().inflate(R.layout.dialog_edit_time,null);
            dpTime.setIs24HourView(true);
        new AlertDialog.Builder(Questionire.this)
                .setTitle("What time did you get into sleep")
                .setView(dpTime)
                .setPositiveButton("Submit", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        hour= String.valueOf(dpTime.getCurrentHour());
                        min=String.valueOf(dpTime.getCurrentMinute());
                        tv.setText(hour+":"+min);
                        tv.setTextColor(Color.parseColor("#ff000000"));
                    }
                })
                .create()
                .show();
    }

}


