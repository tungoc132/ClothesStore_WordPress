<<<<<<< HEAD
# ClothesStore_WordPress
This WordPress-powered clothes store site, hosted on Wamp Server, offers a stylish and efficient platform for showcasing and selling fashion items. Perfect for enhancing your online presence.

# Installation
### 1. WAMP Server
   * Install from link: https://www.wampserver.com/en/download-wampserver-32bits/#wampserver-64-bits-php-5-6-25-php-7
   * Update **Visual C-Runtimes**, install **Visual C++ Redistributable Runtimes All-in-One** from link: https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/
     <br/>--> Select server "TechPowerUp US-4"
   * Update patches for **Visual Studio 2012**, install from link: https://www.microsoft.com/en-us/download/details.aspx?id=30679
     <br/> Install all three files, and add into folder **C:\Windows\SysWOW64**<br/>
     ![image](https://github.com/user-attachments/assets/5b30fb13-7ee0-4ebc-99d7-34d853e909d9)
   * Add missing file **msvcp120.dll** into folder **C:\Windows\SysWOW64**: https://www.dll-files.com/download/c2028ba6c66363b36ea659ca8816265d/msvcp120.dll.html?c=VWhkUmdLdWZDSW4xendvMEIxOGRlUT09
<br/>==> Run WAMP Server as Administrator with *localhost*

# Configure phpMyAdmin Database
Access http://localhost/phpmyadmin/ with *Username: Root ; Server Choice: MySQL*
### 1. Create new user account
  ![image](https://github.com/user-attachments/assets/4da597c0-8e9b-44e9-ba42-e01e39a6ba3a)
<br/>
  ![image](https://github.com/user-attachments/assets/adc949f2-8445-4251-98d7-796a23d50528)
<br/>
  * User name: P_shop
  * Password: 12345678
    
### 2. Import database
  * Choose *Import tab* in *p_shop* database. Then, import *p_shop.sql* file
![image](https://github.com/user-attachments/assets/63672b89-00cd-403e-8295-4c0ea54aeb88)
  * Add **p_shop folder** into folder **C:\wamp64\www**
![image](https://github.com/user-attachments/assets/4421eca6-8560-4ebe-b8fe-7c01d75f6876)

# Run the website
http://localhost/p_shop/
=======
# ClothesStore_WordPress
This WordPress-powered clothes store site, hosted on Wamp Server, offers a stylish and efficient platform for showcasing and selling fashion items. Perfect for enhancing your online presence.

# Installation
### 1. WAMP Server
   * Install from link: https://www.wampserver.com/en/download-wampserver-32bits/#wampserver-64-bits-php-5-6-25-php-7
   * Update **Visual C-Runtimes**, install **Visual C++ Redistributable Runtimes All-in-One** from link: https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/
     <br/>--> Select server "TechPowerUp US-4"
   * Update patches for **Visual Studio 2012**, install from link: https://www.microsoft.com/en-us/download/details.aspx?id=30679
     <br/> Install all three files, and add into folder **C:\Windows\SysWOW64**<br/>
     ![image](https://github.com/user-attachments/assets/5b30fb13-7ee0-4ebc-99d7-34d853e909d9)
   * Add missing file **msvcp120.dll** into folder **C:\Windows\SysWOW64**: https://www.dll-files.com/download/c2028ba6c66363b36ea659ca8816265d/msvcp120.dll.html?c=VWhkUmdLdWZDSW4xendvMEIxOGRlUT09
<br/>==> Run WAMP Server as Administrator with *localhost*

# Configure phpMyAdmin Database
Access http://localhost/phpmyadmin/ with *Username: Root ; Server Choice: MySQL*
### 1. Create new user account
  ![image](https://github.com/user-attachments/assets/4da597c0-8e9b-44e9-ba42-e01e39a6ba3a)
<br/>
  ![image](https://github.com/user-attachments/assets/adc949f2-8445-4251-98d7-796a23d50528)
<br/>
  * User name: P_shop
  * Password: 12345678
    
### 2. Import database
  * Choose *Import tab* in *p_shop* database. Then, import *p_shop.sql* file
![image](https://github.com/user-attachments/assets/63672b89-00cd-403e-8295-4c0ea54aeb88)
  * Add **p_shop folder** into folder **C:\wamp64\www**
![image](https://github.com/user-attachments/assets/4421eca6-8560-4ebe-b8fe-7c01d75f6876)

# Run the website
http://localhost/p_shop/
>>>>>>> 57aa2f526c48c6820a9020b01af2353d87aec656
