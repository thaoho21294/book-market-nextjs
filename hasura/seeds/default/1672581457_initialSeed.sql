INSERT INTO  public.genres (slug, name) VALUES ('tam_ly', 'Tâm Lý');
INSERT INTO  public.genres (slug, name) VALUES ('tieng_anh', 'Tiếng Anh');
INSERT INTO  public.genres (slug, name) VALUES ('suc_khoe', 'Sức Khoẻ');

INSERT INTO  public.provinces (slug, name) VALUES ('ho_chi_minh', 'Hồ Chí Minh');
INSERT INTO  public.provinces (slug, name) VALUES ('ha_noi', 'Hà Nội');

INSERT INTO  public.districts (slug, name, province_id) VALUES ('quan_1', 'Quận 1', 1);
INSERT INTO  public.districts (slug, name, province_id) VALUES ('quan_tan_binh', 'Quận Tân Bình', 1);
INSERT INTO  public.districts (slug, name, province_id) VALUES ('quan_hoang_kiem', 'Quận Hoàng Kiếm', 2);
INSERT INTO  public.districts (slug, name, province_id) VALUES ('quan_dong_da', 'Quận Đống Da', 2);

INSERT INTO  public.users (username, email, name, password, picture, description, district_id, province_id) VALUES ('user1', 'user1@gmail.com', 'User 1', 'user1#', 'https://res.cloudinary.com/duo0fcchr/image/upload/v1672567381/users/avatar-370-456322_pargl1.webp',' Mình cần pass nhữnh quyển này. Robinson Cusor 100k. Kẻ lang thang 50k. \n Tâm lý học tội phạm 2q 110k. Sách mới từ 95 - 100%%. Mình ở đường Hoàng Ngân Q8,\n ai thấy gần thì qua lấy luôn nha\n Facebook: https://www.facebook.com/xyz\n SĐT: 0909090990',  1, 1);
INSERT INTO  public.users (username, email, name, password, picture, description, district_id, province_id) VALUES ('user2', 'user2@gmail.com', 'User 2', 'user2#', 'https://res.cloudinary.com/duo0fcchr/image/upload/v1672567378/users/1000_F_116244459_pywR1e0T3H7FPk3LTMjG6jsL3UchDpht_f7xxvr.jpg','This is description', 2, 1);

INSERT INTO  public.books (title, author, price, original_price, status, pictures, description, genre_id, user_id) VALUES ('Kiên Trần''s IELT Handbook', 'Kiên Trần', 50000, 90000, 'cũ', '["https://res.cloudinary.com/duo0fcchr/image/upload/v1672566722/books/kien_tran_ielt_handbook.jpg"]', 'Nếu bạn đến nhà mình, các bạn sẽ thấy mình ko có nhiều sách IELTS, ko có nhiều app học TA trên điện thoại (chính xác là ko có). Sách ebook IELTS trong laptop cũng ko có luôn. Vì mình học TA với Google. Có từ nào ko biết là tra google, sẽ hiện lên định nghĩa, phát âm, synonym etc. Tìm xem nghĩa nào phù hợp với bài đọc. NEVER nghiên cứu tất cả các nghĩa của một từ. Vì nó sẽ khiến cho chúng ta bị loạn, mục đích của chúng ta đọc là HIỂU cái bài đọc đấy chứ không phải học từ. Sau đó lật sang TAB GOOGLE IMAGE xem ảnh liên quan đến từ đấy, rồi GOOGLE NEWS xem cách báo chí dùng từ như thế nào. Hết 9 giây. Và mình học đc 1 từ không bao giờ quên.', 2, 1);
INSERT INTO  public.books (title, author, price, original_price, status, pictures, description, genre_id, user_id) VALUES ('Nhân tố Enzyme', 'Hirosi Shinya', 35000, 80000, 'mới đọc một lần', '["https://res.cloudinary.com/duo0fcchr/image/upload/v1672566731/books/nhan_to_enzyme.jpg","https://res.cloudinary.com/duo0fcchr/image/upload/v1672580568/books/enzyme1_iscl7m.png"]', 'This is description', 3, 1);
INSERT INTO  public.books (title, author, price, original_price, status, pictures, description, genre_id, user_id) VALUES ('Think fast and slow', 'Daniel KahNeman', 99000, 150000, 'chưa đọc', '["https://res.cloudinary.com/duo0fcchr/image/upload/v1672567717/books/thinking_fast_and_slow_lvowv0.jpg"]', 'The phenomenal New York Times Bestseller by Nobel Prize-winner Daniel Kahneman, Thinking Fast and Slow offers a whole new look at the way our minds work, and how we make decisions.', 1, 2);
