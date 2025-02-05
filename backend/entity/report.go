package entity

import "gorm.io/gorm"

type Report struct {
	gorm.Model
	Desription string

	TopicID *uint
	Topic   Topic `gorm:"references:id"`

	UserID *uint
	User   User `gorm:"references:id"`
}

type Topic struct {
	gorm.Model
	Topic string

	Report []Report `gorm:"foreignKey:TopicID"`
}
