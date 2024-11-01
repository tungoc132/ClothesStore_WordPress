# ClothesStore_WordPress
This WordPress-powered clothes store site, hosted on Wamp Server, offers a stylish and efficient platform for showcasing and selling fashion items. Perfect for enhancing your online presence.

# Installation
### 1. WAMP Server
   * Install from link: https://www.wampserver.com/en/download-wampserver-32bits/#wampserver-64-bits-php-5-6-25-php-7
     
   * Update **Visual C-Runtimes**, install **Visual C++ Redistributable Runtimes All-in-One** from link: https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/
     <br/>--> Select server "TechPowerUp US-4"
     
   * Update patches for **Visual Studio 2012**, install from link: https://www.microsoft.com/en-us/download/details.aspx?id=30679
     <br/> Install all three files, and add into folder **C:\Windows\SysWOW64**<br/>
     ![3 files](https://github.com/user-attachments/assets/1180ec3a-536f-40c8-8cec-f4d93e8f3983)

   * Add missing file **msvcp120.dll** into folder **C:\Windows\SysWOW64**: https://www.dll-files.com/download/c2028ba6c66363b36ea659ca8816265d/msvcp120.dll.html?c=VWhkUmdLdWZDSW4xendvMEIxOGRlUT09
<br/>==> Run WAMP Server as Administrator with *localhost*

# Configure phpMyAdmin Database
Access http://localhost/phpmyadmin/ with *Username: Root ; Server Choice: MySQL*
### 1. Create new user account
  ![Create new user](https://github.com/user-attachments/assets/fb6c6824-2923-4cef-b963-e69998fe535a)
<br/>
  * User name: P_shop
  * Password: 12345678
  * Host: localhost
    
### 2. Import database
  * Choose *Import tab* in *p_shop* database. Then, import *p_shop.sql* file
![Import db](https://github.com/user-attachments/assets/1d214093-1531-4dff-bc06-5d931131f264)
  * Add **p_shop folder** into folder **C:\wamp64\www**
![Source code](https://github.com/user-attachments/assets/6e82bc57-092f-4d97-8cf8-56222c615f49)

# Run the website
http://localhost/p_shop/
