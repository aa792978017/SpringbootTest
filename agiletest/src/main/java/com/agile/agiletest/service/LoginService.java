package com.agile.agiletest.service;

import com.agile.agiletest.Result.Result;
import com.agile.agiletest.pojo.User;

/**
 * login and usercheck functions
 * @author wangchang
 * @version 0.1
 */
public interface LoginService {
    /**
     * 登录处理
     * @return
     */
    public abstract Result loginIn(User userData);


    /**
     * 更新用户信息
     * @param userData
     * @return
     */
    public abstract Result updateUser(User userData, String  passwordNew);

    /**
     * regist user info
     * @param userData
     * @return
     */
    public abstract Result registUser(User userData);
}
