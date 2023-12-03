package com.portfoliobuilder.portfoliobuilder.models;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "userdata")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Setter
@Getter
public class UserData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userDataId;

    @OneToOne
    @JoinColumn( referencedColumnName = "id")
    private User user;

    @Lob
    @Column
    private String userData;
}
