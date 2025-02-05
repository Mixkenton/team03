package entity

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("Database_team03.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	database.AutoMigrate(
		&Gender{},
		&Prefix{},
		&Topic{},
		&Target{},
		&Soundtrack{},
		&Genre{},
		&Categories{},
		&HasSpoil{},
		&Color{},
		&CategoriesWatchlist{},
		&Rating{},
		&SubscribeStatus{},
		&PaymentStatus{},
		&Package{},
		&Subscribe{},
		&User{},
		&Payment{},
		&Report{},
		&Movie{},
		&Review{},
		&History{},
		&Download{},
		&Watchlist{},
		&WatchlistMovie{},
	)
	db = database
	male := Gender{
		Gender: "ชาย",
	}
	female := Gender{
		Gender: "หญิง",
	}
	ohter := Gender{
		Gender: "ไม่ระบุ",
	}
	db.Model(&Gender{}).Create(&male)
	db.Model(&Gender{}).Create(&female)
	db.Model(&Gender{}).Create(&ohter)

	mr := Prefix{
		Prefix: "นาย",
	}
	mrs := Prefix{
		Prefix: "นาง",
	}
	mrss := Prefix{
		Prefix: "นางสาว",
	}
	db.Model(&Prefix{}).Create(&mr)
	db.Model(&Prefix{}).Create(&mrs)
	db.Model(&Prefix{}).Create(&mrss)

	admin := StatusUser{
		Status: "admin",
	}
	user := StatusUser{
		Status: "user",
	}
	db.Model(&StatusUser{}).Create(&admin)
	db.Model(&StatusUser{}).Create(&user)

	adminlogin := User{
		Username:     "admin naja",
		Email:        "admin@gmail.com",
		Password:     "admin",
		Firstname:    "-",
		Lastname:     "-",
		StatusUserID: &admin.ID,
	}
	db.Model(&User{}).Create(&adminlogin)
}
