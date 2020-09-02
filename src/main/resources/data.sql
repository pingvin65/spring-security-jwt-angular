
insert into user ( first_name, last_name, user_name, email, password) values ( 'user', 'user', 'user', 'user@user.us@sun.com', '$2a$10$1v3WYX1mnx1Qb9snCREIj.OwhVNWQUE1bXg4MjCqF9F2.7T4q5A.m');


INSERT INTO company (name) VALUES ('Samsung');
INSERT INTO company (name) VALUES ('Motorola');
INSERT INTO company (name) VALUES ('Alcatel');
INSERT INTO company (name) VALUES ('Apple');
INSERT INTO company (name) VALUES ('LG');
INSERT INTO company (name) VALUES ('BLU');
INSERT INTO company (name) VALUES ('Nokia');
INSERT INTO company (name) VALUES ('ZTE');
INSERT INTO company (name) VALUES ('Google');

INSERT INTO product (name, company_id) VALUES ('Galaxy Note20 Ultra 5G', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy Note20 5G', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy Note10 256GB', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy Note10+', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy Note10+ 5G', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy Note9 128GB CPO ', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy Note9', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy Z Flip 5G', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy Z Flip', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy Fold 512GB', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy S20 Ultra 5G', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy S20+ 5G', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy S20 5G', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy S20 5G UW', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy S10+', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy S10 5G', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy S10', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy S10 Lite', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy S10e', '1');
INSERT INTO product (name, company_id) VALUES ('Galaxy S9', '1');

INSERT INTO product (name, company_id) VALUES ('iPhone SE', '4');
INSERT INTO product (name, company_id) VALUES ('iPhone 11', '4');
INSERT INTO product (name, company_id) VALUES ('iPhone 11 Pro', '4');
INSERT INTO product (name, company_id) VALUES ('iPhone X R', '4');

INSERT INTO product (name, company_id) VALUES ('alcatel 3v', '3');
INSERT INTO product (name, company_id) VALUES ('alcatel insight', '3');
INSERT INTO product (name, company_id) VALUES ('alcatel avalon v', '3');
INSERT INTO product (name, company_id) VALUES ('alcatel onyx', '3');

INSERT INTO product (name, company_id) VALUES ('C5L', '6');
INSERT INTO product (name, company_id) VALUES ('C5 2019', '6');
INSERT INTO product (name, company_id) VALUES ('C5 PLUS', '6');
INSERT INTO product (name, company_id) VALUES ('C6L', '6');
INSERT INTO product (name, company_id) VALUES ('C6 2019', '6');
INSERT INTO product (name, company_id) VALUES ('G90', '6');
INSERT INTO product (name, company_id) VALUES ('G80', '6');
INSERT INTO product (name, company_id) VALUES ('G60', '6');
INSERT INTO product (name, company_id) VALUES ('G70', '6');
INSERT INTO product (name, company_id) VALUES ('G5', '6');
INSERT INTO product (name, company_id) VALUES ('G5 PLUS', '6');
INSERT INTO product (name, company_id) VALUES ('G6', '6');
INSERT INTO product (name, company_id) VALUES ('G8', '6');
INSERT INTO product (name, company_id) VALUES ('G9', '6');
INSERT INTO product (name, company_id) VALUES ('G9 PRO', '6');

SET SQL_SAFE_UPDATES=0;
update product set 
description = "The easiest way to check your phone's model name and number is to use the phone itself. 
Go to the Settings or Options menu, scroll to the bottom of the list, and check 'About phone', 
'About device' or similar. The device name and model number should be listed." 
where description IS NULL;
SET SQL_SAFE_UPDATES=1;

SET SQL_SAFE_UPDATES=0;
update company set 
description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of 
Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
software like Aldus PageMaker including versions of Lorem Ipsum." 
where description IS NULL;
SET SQL_SAFE_UPDATES=1;

--SET SQL_SAFE_UPDATES=0;

INSERT INTO post (content, title) 
VALUES ('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, 
aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis 
pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, 
consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus 
varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. 
Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. 
Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut 
libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. 
Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, ', 'Home');


INSERT INTO post (content, title)  values
('Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy 
text is nonsensical. Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception 
is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and "words" is random, the reader 
will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), 
or the distribution of text on the page (layout or type area). For this reason, dummy text usually consists of a more or less 
random series of words or syllables. This prevents repetitive patterns from impairing the overall visual impression and facilitates 
the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout 
impression of the final publication is not compromised.', 'About');

--SET SQL_SAFE_UPDATES=1;






