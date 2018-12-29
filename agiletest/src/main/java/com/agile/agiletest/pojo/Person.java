package com.agile.agiletest.pojo;

/**
 * person 类
 * 用户对person信息持久化
 * @author wangchang
 * @version 0.1
 */
public class Person {
    private int id;
    private String trueName;
    private String idCardNum;
    private String phoneNum;
    private int age;

    public Person(int id, String trueName, String idCardNum, String phoneNum, int age) {
        this.id = id;
        this.trueName = trueName;
        this.idCardNum = idCardNum;
        this.phoneNum = phoneNum;
        this.age = age;
    }

    public Person(String trueName, String idCardNum, String phoneNum, int age) {
        this.trueName = trueName;
        this.idCardNum = idCardNum;
        this.phoneNum = phoneNum;
        this.age = age;

    }

    public Person() {

    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", trueName='" + trueName + '\'' +
                ", idCardNum='" + idCardNum + '\'' +
                ", phoneNum='" + phoneNum + '\'' +
                ", age=" + age +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTrueName() {
        return trueName;
    }

    public void setTrueName(String trueName) {
        this.trueName = trueName;
    }

    public String getIdCardNum() {
        return idCardNum;
    }

    public void setIdCardNum(String idCardNum) {
        this.idCardNum = idCardNum;
    }

    public String getPhoneNum() {
        return phoneNum;
    }

    public void setPhoneNum(String phoneNum) {
        this.phoneNum = phoneNum;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
