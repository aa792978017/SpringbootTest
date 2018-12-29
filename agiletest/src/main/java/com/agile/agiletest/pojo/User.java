package com.agile.agiletest.pojo;


/**
 * 用户注册信息pojo
 * 用于存储用户账号信息
 * @author wangchang
 * @version 0.1
 */
public class User {
    private int id;
    private int personId;
    private String username;
    private String password;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getPersonId() {
        return personId;
    }

    public void setPersonId(int personId) {
        this.personId = personId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    //  构造方法
    public User(int id, int personId, String username, String password) {
        this.id = id;
        this.personId = personId;
        this.username = username;
        this.password = password;
    }
    //    构造方法
    public User(){}

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", personId=" + personId +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
