DROP DATABASE GingerKingBoats_DB;

CREATE DATABASE GingerKingBoats_DB;

USE GingerKingBoats_DB;

DROP TABLE boat CASCADE;
DROP TABLE booking CASCADE;
DROP TABLE users CASCADE;

CREATE TABLE boat(
boatId INT PRIMARY KEY,
allowedDays INT NOT NULL,
basePrice INT,
discount FLOAT,
description TEXT,
boatType VARCHAR(50) NOT NULL,
location VARCHAR(20) NOT NULL,
bookingStart DATE NOT NULL
);

/* Date need to be in YYYY-MM-DD */
INSERT INTO boat VALUES(1000,5,100,0.15, 'These boats offer the luxury of living on water and provide excellent recreational holiday accommodation facilities.'
						,'Houseboat','Atlanta,GA', ADDDATE(SYSDATE(), INTERVAL 5 Day));
INSERT INTO boat VALUES(1001,4,500,0.1, 'These boats are apt for relaxed sailing and include a gallery and a berth. All modern comforts like heaters, air conditioners, and power generators are enclosed in the arrangement.'
						,'Cruiser','Palo Alto, CA', ADDDATE(SYSDATE(), INTERVAL 6 Day));
INSERT INTO boat VALUES(1002,9,250,0.13, 'Bass boats are generally 14 to 23 feet, and typically used for freshwater fishing.'
						,'Bass Boat','Plano,TX', ADDDATE(SYSDATE(), INTERVAL 7 Day));
INSERT INTO boat VALUES(1003,2,400,0.12, 'Performance powerboats, built for speed.'
						,'Speed Boat','New York, NY', ADDDATE(SYSDATE(), INTERVAL 8 Day));
INSERT INTO boat VALUES(1004,6,200,0.18, 'The power of sailing style catamarans comprise of mulitple hulls and are excellent for fishing purposes and even for leisurely cruising abilities. '
						,'Power Catamaran','Lisle, IL', ADDDATE(SYSDATE(), INTERVAL 9 Day));
INSERT INTO boat VALUES(1005,5,600,0.14, 'These boats are apt for relaxed sailing and include a gallery and a berth. All modern comforts like heaters, air conditioners, and power generators are enclosed in the arrangement.'
						,'Cruiser','Chicago, IL', ADDDATE(SYSDATE(), INTERVAL 14 Day));
INSERT INTO boat VALUES(1006,3,150,0.11, 'Bass boats are generally 14 to 23 feet, and typically used for freshwater fishing.'
						,'Bass Boat','Clearwater, FL', ADDDATE(SYSDATE(), INTERVAL 16 Day));
INSERT INTO boat VALUES(1007,2,550,0.12, 'Performance powerboats, built for speed.'
						,'Speed Boat','Portland, OR', ADDDATE(SYSDATE(), INTERVAL 18 Day));
INSERT INTO boat VALUES(1008,6,450,0.09, 'The power of sailing style catamarans comprise of mulitple hulls and are excellent for fishing purposes and even for leisurely cruising abilities. '
						,'Power Catamaran','San Diego, CA', ADDDATE(SYSDATE(), INTERVAL 22 Day));

/* mobileNo can't be int 10, size limit should be done in UI, changed to varchar */
CREATE TABLE booking(
txnId INT PRIMARY KEY AUTO_INCREMENT,
boatId INT REFERENCES boat(boatId) ,
mobileNo VARCHAR(10) NOT NULL,
startDate DATE REFERENCES boat(bookingStart),
endDate DATE NOT NULL,
userId INT REFERENCES users(userId),
totalCost INT NOT NULL
);

-- allowedDays 5
INSERT INTO booking VALUES(5000, 1000, 6207692359, ADDDATE(SYSDATE(), INTERVAL 5 Day), ADDDATE(SYSDATE(), INTERVAL 10 Day), 2000, 425);
-- allowedDays 4
INSERT INTO booking VALUES(5001, 1001, 1497315626, ADDDATE(SYSDATE(), INTERVAL 6 Day), ADDDATE(SYSDATE(), INTERVAL 10 Day), 2001, 860);
-- allowedDays 9
INSERT INTO booking VALUES(5002, 1002, 2554344167, ADDDATE(SYSDATE(), INTERVAL 1 Day), ADDDATE(SYSDATE(), INTERVAL 10 Day), 2002, 1305);
-- allowedDays 2
INSERT INTO booking VALUES(5003, 1003, 8823666310, ADDDATE(SYSDATE(), INTERVAL 8 Day), ADDDATE(SYSDATE(), INTERVAL 10 Day), 2003, 1760);
-- allowedDays 6
INSERT INTO booking VALUES(5004, 1004, 9165992747, ADDDATE(SYSDATE(), INTERVAL 9 Day), ADDDATE(SYSDATE(), INTERVAL 15 Day), 2004, 2225);
-- allowedDays 5
INSERT INTO booking VALUES(5005, 1005, 4142341667, ADDDATE(SYSDATE(), INTERVAL 13 Day), ADDDATE(SYSDATE(), INTERVAL 18 Day), 2005, 860);
-- allowedDays 3
INSERT INTO booking VALUES(5006, 1006, 2510092035, ADDDATE(SYSDATE(), INTERVAL 16 Day), ADDDATE(SYSDATE(), INTERVAL 19 Day), 2006, 1305);
-- allowedDays 2
INSERT INTO booking VALUES(5007, 1007, 9192204770, ADDDATE(SYSDATE(), INTERVAL 18 Day), ADDDATE(SYSDATE(), INTERVAL 20 Day), 2007, 1760);
-- allowedDays 6
INSERT INTO booking VALUES(5008, 1008, 4403889211, ADDDATE(SYSDATE(), INTERVAL 17 Day), ADDDATE(SYSDATE(), INTERVAL 23 Day), 2008, 2225);

CREATE TABLE users(
userId INT PRIMARY KEY,
userType VARCHAR(10),
email VARCHAR(20) NOT NULL,
mobileNo VARCHAR(10) REFERENCES booking(mobileNo),
userStatus VARCHAR(10),
userName VARCHAR(20)
);

INSERT INTO users VALUES(2000, 'admin','pranav@gmail.com', 1234567890, 'paid', 'pranav');
INSERT INTO users VALUES(2001, 'customer','shivam@yahoo.com',9876543210, 'paid', 'shivam');
INSERT INTO users VALUES(2002, 'customer','nishma@hotmail.com',1357924680, 'paid', 'nishma');
INSERT INTO users VALUES(2003, 'admin','swaroop@aol.com', 2468013579,'paid', 'swaroop');
INSERT INTO users VALUES(2004, 'admin','mike@apple.com',1123581321,'paid', 'mike');
INSERT INTO users VALUES(2005, 'customer','faheem@gmail.com', 6969696969, 'paid', 'faheem');
INSERT INTO users VALUES(2006, 'admin','kiran@yahoo.com', 1313131313, 'paid', 'kiran');
INSERT INTO users VALUES(2007, 'customer','raghu@hotmail.com',9192204770, 'paid', 'raghavendra');
INSERT INTO users VALUES(2008, 'customer','person@aol.com', 4403889211,'paid', 'person');

SELECT * FROM boat;
SELECT * FROM booking;
SELECT * FROM users;
