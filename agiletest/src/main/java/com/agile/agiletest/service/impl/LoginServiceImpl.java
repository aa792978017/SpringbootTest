package com.agile.agiletest.service.impl;

import com.agile.agiletest.Result.Result;
import com.agile.agiletest.dao.PersonDao;
import com.agile.agiletest.dao.UserDao;
import com.agile.agiletest.pojo.User;
import com.agile.agiletest.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author wangchang
 * @version 0.1
 */
@Service
public class LoginServiceImpl implements LoginService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private PersonDao personDao;
    @Override
    public Result loginIn(User userData) {
        Result result = new Result();
        User user = userDao.getUserByUsername(userData.getUsername());

        if (user == null){
            result.setData(null);
            result.setMsg("username is not exist");
            result.setStateCode(404);
            return result;
        }
        if (!user.getPassword().equals(userData.getPassword())){
            result.setMsg("password is wrong");
            result.setStateCode(404);

            return result;
        }
        result.setStateCode(200);
        result.setMsg(" login in success");
        result.setData(user);
        return result;
    }

    @Override
    @Transactional
    public Result updateUser(User userData, String newPassword) {
        Result result = new Result();
        User user = userDao.getUserByUsername(userData.getUsername());
        if (user != null){
            String oldPassword = user.getPassword();
            if (userData.getPassword().equals(oldPassword)){
                userData.setPassword(newPassword);
                if (userDao.updateUserRegisterInfo(userData) == 1){
                    result.setMsg("密码修改成功");
                    result.setStateCode(200);
                    result.setData(true);
                }else {
                    result.setData(false);
                    result.setStateCode(400);
                    result.setMsg("密码修改失败，请重新操作");
                }
            } else {
                result.setData(false);
                result.setStateCode(200);
                result.setMsg("修改密码失败，旧密码错误");
            }

        } else {
            result.setData(false);
            result.setStateCode(400);
            result.setMsg("密码修改失败，不存在该用户");
        }


        return result;
    }

    @Override
    @Transactional
    public Result registUser(User userData) {
        Result result = new Result();
        if (userDao.insertUserRegisterInfo(userData) == 1){
            result.setMsg("regist success");
            result.setStateCode(200);
            result.setData(userData.getUsername());
        }else {
            result.setData(false);
            result.setMsg("regist fail, username is exist");
            result.setStateCode(200);
        }

        return result;
    }
}
