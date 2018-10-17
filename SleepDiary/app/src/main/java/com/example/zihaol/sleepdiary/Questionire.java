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
import android.support.design.widget.NavigationView;
import android.support.v4.view.ViewPager;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Html;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.TranslateAnimation;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.TimePicker;
import android.widget.Toast;

import com.example.zihaol.adatper.PageAdatper;
import com.readystatesoftware.systembartint.SystemBarTintManager;

import java.io.FileOutputStream;
import java.util.ArrayList;


public class Questionire extends AppCompatActivity implements View.OnClickListener,
        ViewPager.OnPageChangeListener {

    private TextView date_of_record;
    private TextView into_bed;
    private TextView time_try_sleep;
    private TextView time_out_bed;
    private TextView long_asleep;
    private TextView numWakeUp;
    private TextView awakeningLen;
    private TextView final_awake;
    private TextView postSleep;
    private CheckBox earlier;
    private TextView earlierAmount;
    private Spinner sleepAmount;
    private Spinner quality;
    private Spinner refreshed;
    private Spinner Numnaps;
    private TextView napTime;
    private TextView numAlc;
    private TextView lastAlc;
    private TextView numcaff;
    private TextView lastcaff;
    private CheckBox hadMed;
    private TextView medList;
    private TextView comment;

    private String date_of_records;
    private String into_beds;
    private String time_try_sleeps;
    private String time_out_beds;
    private String long_asleeps;
    private String numWakeUps;
    private String awakeningLens;
    private String final_awakes;
    private String postSleeps;
    private String earliers;
    private String earlierAmounts;
    private String sleepAmounts;
    private String qualitys;
    private String refresheds;
    private String Numnapss;
    private String napTimes;
    private String numAlcs;
    private String lastAlcs;
    private String numcaffs;
    private String lastcaffs;
    private String hadMeds;
    private String medLists;
    private String comments;

    private Button button1;
    private Button button2;
    private Button button3;


    private ImageButton info0;
    private ImageButton info1;
    private ImageButton info2;
    private ImageButton info3;
    private ImageButton info4;
    private ImageButton info5;
    private ImageButton info6;
    private ImageButton info7;
    private ImageButton info8;
    private ImageButton info9;
    private ImageButton info10;
    private ImageButton info11;
    private ImageButton info12;
    private ImageButton info13;
    private ImageButton info14;
    private ImageButton info15;
    private ImageButton info16;
    private ImageButton info17;
    private ImageButton info18;
    private ImageButton info19;
    private ImageButton info20;
    private ImageButton info21;
    private ImageButton info22;


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

    private ImageButton meun_button;

    private DrawerLayout drawerLayout;
    private SystemBarTintManager tintManager;
    private NavigationView navigationView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_questionire);
        initView();
    }

/*Initialize Variables & Listeners*/
    private void initView(){
        //找viewpager
        vpager = (ViewPager) findViewById(R.id.vpager);
        tv_one = (TextView) findViewById(R.id.tv_one);
        tv_two = (TextView) findViewById(R.id.tv_two);
        tv_three = (TextView) findViewById(R.id.tv_three);

        img_cursor = (ImageView) findViewById(R.id.img_cursor);
        meun_button = (ImageButton) findViewById(R.id.menu_button);
        drawerLayout = (DrawerLayout) findViewById(R.id.activity_na);
        navigationView = (NavigationView) findViewById(R.id.left_nav);

        View headerView = navigationView.getHeaderView(0);
        meun_button.setOnClickListener(this);

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
        numWakeUp=view2.findViewById(R.id.tv_wake);
        awakeningLen=view2.findViewById(R.id.tv_wake2);
        final_awake=view2.findViewById(R.id.tv8);
        postSleep=view2.findViewById(R.id.tv_wake4);
        earlier=view2.findViewById(R.id.Early);
        earlierAmount=view2.findViewById(R.id.tv_earlier);
        sleepAmount=view2.findViewById(R.id.sleep_time);
        quality=view2.findViewById(R.id.quality);
        refreshed=view2.findViewById(R.id.feel);
        Numnaps=view2.findViewById(R.id.doze);
        napTime=view2.findViewById(R.id.tv_wake5);
        numAlc=view3.findViewById(R.id.tv_wake11);
        lastAlc=view3.findViewById(R.id.tv6);
        numcaff=view3.findViewById(R.id.tv_wake111);
        lastcaff=view3.findViewById(R.id.tv7);
        hadMed=view3.findViewById(R.id.Medication);
        medList=view3.findViewById(R.id.tv_wake12);
        comment=view3.findViewById(R.id.comment);

        button1=view1.findViewById(R.id.button1);
        button2=view2.findViewById(R.id.button2);
        button3=view3.findViewById(R.id.button3);


        info0=view1.findViewById(R.id.info);
        info1=view1.findViewById(R.id.info1);
        info2=view1.findViewById(R.id.info2);
        info3=view1.findViewById(R.id.info3);
        info4=view1.findViewById(R.id.info4);
        info5=view2.findViewById(R.id.info5);
        info6=view2.findViewById(R.id.info6);
        info7=view2.findViewById(R.id.info7);
        info8=view2.findViewById(R.id.info8);
        info9=view2.findViewById(R.id.info9);
        info10=view2.findViewById(R.id.info10);
        info11=view2.findViewById(R.id.info11);
        info12=view2.findViewById(R.id.info12);
        info13=view2.findViewById(R.id.info13);
        info14=view2.findViewById(R.id.info14);
        info15=view2.findViewById(R.id.info15);
        info16=view3.findViewById(R.id.info16);
        info17=view3.findViewById(R.id.info17);
        info18=view3.findViewById(R.id.info18);
        info19=view3.findViewById(R.id.info19);
        info20=view3.findViewById(R.id.info20);
        info21=view3.findViewById(R.id.info21);
        info22=view3.findViewById(R.id.info22);


        date_of_record.setOnClickListener(this);
        into_bed.setOnClickListener(this);
        time_try_sleep.setOnClickListener(this);
        time_out_bed.setOnClickListener(this);
        long_asleep.setOnClickListener(this);
        final_awake.setOnClickListener(this);
        lastAlc.setOnClickListener(this);
        lastcaff.setOnClickListener(this);

        button1.setOnClickListener(this);
        button2.setOnClickListener(this);
        button3.setOnClickListener(this);

        info0.setOnClickListener(this);
        info1.setOnClickListener(this);
        info2.setOnClickListener(this);
        info3.setOnClickListener(this);
        info4.setOnClickListener(this);
        info5.setOnClickListener(this);
        info6.setOnClickListener(this);
        info7.setOnClickListener(this);
        info8.setOnClickListener(this);
        info9.setOnClickListener(this);
        info10.setOnClickListener(this);
        info11.setOnClickListener(this);
        info12.setOnClickListener(this);
        info13.setOnClickListener(this);
        info14.setOnClickListener(this);
        info15.setOnClickListener(this);
        info16.setOnClickListener(this);
        info17.setOnClickListener(this);
        info18.setOnClickListener(this);
        info19.setOnClickListener(this);
        info20.setOnClickListener(this);
        info21.setOnClickListener(this);
        info22.setOnClickListener(this);

        vpager.setAdapter(new PageAdatper(listViews));
        vpager.setCurrentItem(0);
        tv_one.setOnClickListener(this);
        tv_two.setOnClickListener(this);
        tv_three.setOnClickListener(this);

        vpager.addOnPageChangeListener(this);


    }


/*Button Press*/
    @Override
    public void onClick(View v) {
        switch (v.getId()) {
            case R.id.menu_button:
                if (drawerLayout.isDrawerOpen(navigationView)){
                    drawerLayout.closeDrawer(navigationView);
                }else{
                    drawerLayout.openDrawer(navigationView);
                }
                break;
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
            case  R.id.tv6:
                setTimeAction(lastAlc);
                break;
            case  R.id.tv7:
                setTimeAction(lastcaff);
                break;
            case  R.id.tv8:
                setTimeAction(final_awake);
                break;
            case R.id.button1:
                vpager.setCurrentItem(1);
                break;
            case R.id.button2:
                vpager.setCurrentItem(2);
                break;
            case R.id.button3:
                test();
                break;

            case  R.id.info:
                getinfo(0);
                break;
            case  R.id.info1:
                getinfo(1);
                break;
            case  R.id.info2:
                getinfo(2);
                break;
            case  R.id.info3:
                getinfo(3);
                break;
            case  R.id.info4:
                getinfo(4);
                break;
            case  R.id.info5:
                getinfo(5);
                break;
            case  R.id.info6:
                getinfo(6);
                break;
            case  R.id.info7:
                getinfo(7);
                break;
            case  R.id.info8:
                getinfo(8);
                break;
            case  R.id.info9:
                getinfo(9);
                break;
            case  R.id.info10:
                getinfo(10);
                break;
            case  R.id.info11:
                getinfo(11);
                break;
            case  R.id.info12:
                getinfo(12);
                break;
            case  R.id.info13:
                getinfo(13);
                break;
            case  R.id.info14:
                getinfo(14);
                break;
            case  R.id.info15:
                getinfo(15);
                break;
            case  R.id.info16:
                getinfo(16);
                break;
            case  R.id.info17:
                getinfo(17);
                break;
            case  R.id.info18:
                getinfo(18);
                break;
            case  R.id.info19:
                getinfo(19);
                break;
            case  R.id.info20:
                getinfo(20);
                break;
            case  R.id.info21:
                getinfo(21);
                break;
            case  R.id.info22:
                getinfo(22);
                break;

        }
    }


/*Page Animation*/
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
                .setTitle(Html.fromHtml("<font color=\"#ffffff\">Set Date of sleep</font>"))
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
            //dpTime.setIs24HourView(true);
        new AlertDialog.Builder(Questionire.this)
                .setTitle(Html.fromHtml("<font color=\"#ffffff\">Set time</font>"))
                .setView(dpTime)
                .setPositiveButton("Submit", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        hour= String.valueOf(dpTime.getCurrentHour());
                        min=String.valueOf(dpTime.getCurrentMinute());
                        if(min.length() == 1)
                            min = "0" + min;
                        tv.setText(hour+":"+min);
                        tv.setTextColor(Color.parseColor("#ff000000"));
                    }
                })
                .create()
                .show();
    }

/*info*/
    private void getinfo(final int id){
        String infotext = "Error";
        switch (id) {
            case 0:
                infotext = "<font color=\"#ffffff\">Write the date of the morning you are filling out the diary</font>";
                break;
            case 1:
                infotext = "<font color=\"#ffffff\">Write the time you got into bed. This may not be the time you began \"trying\" to fall asleep.</font>";
                break;
            case 2:
                infotext = "<font color=\"#ffffff\">Record the time you began \"trying\" to fall asleep.</font>";
                break;
            case 3:
                infotext = "<font color=\"#ffffff\">What time did you get out of bed with no further attempt at sleeping? This may be different from your final awakening time (e.g. you may have woken up at 6:35 a.m. but did not get out of bed to start your day until 7:20 a.m.)</font>";
                break;
            case 4:
                infotext = "<font color=\"#ffffff\">Beginning at the time you wrote in question 2, how long did it take you to fall asleep?</font>";
                break;
            case 5:
                infotext = "<font color=\"#ffffff\">How many times did you wake up between the time you first fell asleep and your final awakening?</font>";
                break;
            case 6:
                infotext = "<font color=\"#ffffff\">What was the total time you were awake between the time you first fell asleep and your final awakening. For example, if you woke up 3 times for 20 minutes, 35 minutes, and 15 minutes, add them all up (20+35+15= 70 min or 1 hr and 10 min).</font>";
                break;
            case 7:
                infotext = "<font color=\"#ffffff\">Record the last time you woke up in the morning.</font>";
                break;
            case 8:
                infotext = "<font color=\"#ffffff\">After the last time you woke-up (item #6a), how many minutes did you spend in bed trying to sleep? For example, if you woke up at 8 am but continued to try sleep until 9 am, record 1 hour.</font>";
                break;
            case 9:
                infotext = "<font color=\"#ffffff\">If you woke up or were awakened earlier than you planned, check yes. If you woke up at your planned time, check no.</font>";
                break;
            case 10:
                infotext = "<font color=\"#ffffff\">If you answered \"yes\" to question 6c, write the number of minutes you woke up earlier than you had planned on waking up. For example, if you woke up 15 minutes before the alarm went off, record 15 minutes here.</font>";
                break;
            case 11:
                infotext = "<font color=\"#ffffff\">This should be your best estimate, based on when you went to bed and woke up, how long it took you to fall asleep, and how long you were awake. You do not need to calculate this by adding and subtracting; just give your best estimate.</font>";
                break;
            case 12:
                infotext = "<font color=\"#ffffff\">\"Sleep Quality\" is your sense of whether your sleep was good or poor.</font>";
                break;
            case 13:
                infotext = "<font color=\"#ffffff\">This refers to how you felt after you were done sleeping for the night, during the first few minutes that you were awake.</font>";
                break;
            case 14:
                infotext = "<font color=\"#ffffff\">A nap is a time you decided to sleep during the day, whether in bed or not in bed. \"Dozing\" is a time you may have nodded off for a few minutes, without meaning to, such as while watching TV. Count all the times you napped or dozed at any time from when you first got out of bed in the morning until you got into bed again at night.</font>";
                break;
            case 15:
                infotext = "<font color=\"#ffffff\">Estimate the total amount of time you spent napping or dozing, in hours and minutes. For instance, if you napped twice, once for 30 minutes and once for 60 minutes, and dozed for 10 minutes, you would answer \"1 hour 40 minutes.\" If you did not nap or doze, write \"N/A\" (not applicable).</font>";
                break;
            case 16:
                infotext = "<font color=\"#ffffff\">Enter the number of alcoholic drinks you had where 1 drink is defined as one 12 oz beer (can), 5 oz wine, or 1.5 oz liquor (one shot).</font>";
                break;
            case 17:
                infotext = "<font color=\"#ffffff\">If you had an alcoholic drink yesterday, enter the time of day in hours and minutes of your last drink. If you did not have a drink, write \"N/A\" (not applicable).</font>";
                break;
            case 18:
                infotext = "<font color=\"#ffffff\">Enter the number of caffeinated drinks (coffee, tea, soda, energy drinks) you had where for coffee and tea, one drink = 6-8 oz; while for caffeinated soda one drink = 12 oz.</font>";
                break;
            case 19:
                infotext = "<font color=\"#ffffff\">If you had a caffeinated drink, enter the time of day in hours and minutes of your last drink. If you did not have a caffeinated drink, write \"N/A\" (not applicable).</font>";
                break;
            case 20:
                infotext = "<font color=\"#ffffff\">List the medication name, how much and when you took EACH different medication you took tonight to help you sleep. Include medication available over the counter, prescription medication, and herbals (example: \"Sleepwell 50 mg 11 pm\"). If every night is the same, write \"same\" after the first day.</font>";
                break;
            case 21:
                infotext = "<font color=\"#ffffff\">List the medication name, how much and when you took EACH different medication you took tonight to help you sleep. Include medication available over the counter, prescription medication, and herbals (example: \"Sleepwell 50 mg 11 pm\"). If every night is the same, write \"same\" after the first day.</font>";
                break;
            case 22:
                infotext = "<font color=\"#ffffff\">If you have anything that you would like to say that is relevant to your sleep feel free to write it here.</font>";
                break;
        }
        new AlertDialog.Builder(Questionire.this)
                .setTitle(Html.fromHtml("<font color=\"#ffffff\">Info</font>"))
                .setMessage(Html.fromHtml(infotext))
                .setNegativeButton("Back", null)
                .create()
                .show();
    }

/*Submit*/
    private void test(){
        date_of_records = date_of_record.getText().toString();
        into_beds = into_bed.getText().toString();
        time_try_sleeps = time_try_sleep.getText().toString();
        time_out_beds = time_out_bed.getText().toString();
        long_asleeps = long_asleep.getText().toString();
        numWakeUps = numWakeUp.getText().toString();
        awakeningLens = awakeningLen.getText().toString();
        final_awakes = final_awake.getText().toString();
        postSleeps = postSleep.getText().toString();
        earliers = "0";
        if(earlier.isChecked())
            earliers = "1";
        earlierAmounts = earlierAmount.getText().toString();
        sleepAmounts = sleepAmount.getSelectedItem().toString();
        qualitys = quality.getSelectedItem().toString();
        refresheds = refreshed.getSelectedItem().toString();
        Numnapss = Numnaps.getSelectedItem().toString();
        napTimes = napTime.getText().toString();
        numAlcs = numAlc.getText().toString();
        lastAlcs = lastAlc.getText().toString();
        numcaffs = numcaff.getText().toString();
        lastcaffs = lastcaff.getText().toString();
        hadMeds = "0";
        if(hadMed.isChecked())
            hadMeds = "1";
        medLists = medList.getText().toString();
        comments = comment.getText().toString();

        String text = "<font color=\"#ffffff\">This text is white.</font><font color=\"yellow\"> Yellow</font>";
        new AlertDialog.Builder(Questionire.this)
                .setTitle(Html.fromHtml(text))
                .setMessage(Html.fromHtml("<font color=\"#ffffff\">" + date_of_records + " " + into_beds + " " + time_try_sleeps + " " + time_out_beds + " " +
                        long_asleeps + " " + numWakeUps + " " + awakeningLens + " " + final_awakes + " " + postSleeps + " " + earliers + " " + earlierAmounts + " " +
                        sleepAmounts + " " + qualitys + " " + refresheds + " " + Numnapss + " " + napTimes + " " + numAlcs + lastAlcs + " " + numcaffs + " " +
                        lastcaffs + " " + hadMeds + " " + medLists + " " + comments + "</font>"))
                .setNegativeButton("Back", null)
                .create()
                .show();


    }
}


