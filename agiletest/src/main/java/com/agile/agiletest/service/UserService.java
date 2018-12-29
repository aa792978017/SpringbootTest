package com.agile.agiletest.service;

import com.agile.agiletest.Result.Result;
import com.agile.agiletest.pojo.Person;

/**
 * @author wangchang
 * @version 0.1
 */
public interface UserService {
    /**
     * 第一次填写个人信息
     * @param username
     * @param person
     * @return
     */
//    public abstract Result insertUserInfo(String username, Person person);

    /**
     * 修改个人信息
     * @param username
     * @param person
     * @return
     */
    public abstract Result updateUserInfo(String username ,Person person);


    /**
     * 查询个人信息
     * @param username
     * @return
     */
    public abstract Result getPersonInfo(String username);
}
