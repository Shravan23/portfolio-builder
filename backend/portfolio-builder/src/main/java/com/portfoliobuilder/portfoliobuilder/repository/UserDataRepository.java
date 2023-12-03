package com.portfoliobuilder.portfoliobuilder.repository;

import com.portfoliobuilder.portfoliobuilder.models.UserData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDataRepository extends JpaRepository<UserData, Long> {
    UserData findUserDataByUserDataId(Long id);

    UserData save(UserData data);
}
