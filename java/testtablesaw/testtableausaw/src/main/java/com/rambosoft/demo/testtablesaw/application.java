package com.rambosoft.demo.testtablesaw;

import tech.tablesaw.api.DoubleColumn;
import tech.tablesaw.api.StringColumn;
import tech.tablesaw.api.Table;

import java.util.ArrayList;
import java.util.List;

import static tech.tablesaw.aggregate.AggregateFunctions.*;
public class application {
    public static void main(String[] args) {
        Table tb = getData();
        System.out.println(tb.print());
        //1.列重命名
        //tb.column(2).setName("满意度");
        //2.对专业分组
        List<String> majorList = new ArrayList<String>();
        majorList.add("工资满意吗");
        majorList.add("专业满意吗");
        Table tbMajor = tb.summarize(majorList, mean).by("专业");
        System.out.println(tbMajor.print());
        Table tbCollege = tb.summarize(majorList, mean).by("院系", "专业");
        System.out.println(tbCollege.print());
        //3.数值替换
        StringColumn strColumn = (StringColumn) tb.column("专业满意吗");
        Integer colIndex = tb.columnIndex("专业满意吗");
        DoubleColumn dColumn = DoubleColumn.create("专业满意吗");
        for (String date : strColumn) {
            if (date.equals("非常满意"))
                dColumn.append(5);
            else if (date.equals("一般满意"))
                dColumn.append(3);
            else if (date.equals("不太满意"))
                dColumn.append(2);
            else
                dColumn.append(1);
        }
        tb.removeColumns(colIndex);
        tb.insertColumn(colIndex, dColumn);
        System.out.println(tb.print());

    }

    private static Table getData() {
        double[] list = {1, 2, 3, 4, 5};
        DoubleColumn dc = DoubleColumn.create("学号", list);

        String[] strList = {"计算机技术", "计算机技术", "计算机技术", "软件工程", "软件工程"};
        StringColumn sc = StringColumn.create("专业", strList);
        String[] collegeList = {"计算机学院", "计算机学院", "计算机学院", "计算机学院", "计算机学院"};
        StringColumn collegeSc = StringColumn.create("院系", collegeList);

        String[] quotalist1 = {"非常满意", "一般满意", "很不满意", "不太满意", "基本满意"};
        StringColumn quotadc1 = StringColumn.create("专业满意吗", quotalist1);
        double[] quotalist2 = {3, 2, 1, 2, 5};
        DoubleColumn quotadc2 = DoubleColumn.create("工资满意吗", quotalist2);

        Table tb = Table.create("test table");
        tb.addColumns(dc);
        tb.addColumns(collegeSc);
        tb.addColumns(sc);
        tb.addColumns(quotadc1);
        tb.addColumns(quotadc2);
        return tb;
    }
}
