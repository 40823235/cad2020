var tipuesearch = {"pages": [{'title': 'About', 'text': '倉儲: https://github.com/40823245/cad2020 \n \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Work', 'text': '放上每周作業並更新 \n', 'tags': '', 'url': 'Work.html'}, {'title': 'w1', 'text': '零件繪圖、建立網站、使用ssh \n', 'tags': '', 'url': 'w1.html'}, {'title': '零件(待更新)', 'text': 'pdf1:Solidworks2017使用1mm繪製 \n pdf2: \n \n 1-10 \n \n 11-20 \n \n 21-30 \n \n 31-40 \n \n 41-50 \n', 'tags': '', 'url': '零件(待更新).html'}, {'title': 'w2-w3', 'text': '零件繪製、表格製作、下載nx可攜版 \n', 'tags': '', 'url': 'w2-w3.html'}, {'title': 'w4-w5', 'text': '零件繪製', 'tags': '', 'url': 'w4-w5.html'}, {'title': '筆記', 'text': '一、開啟9443 \n \n 先打指令到cmsimde資料夾 \n 在執行python wsgi.py指令 \n 網址搜尋https://localhost:9443/ \n 或複製黑窗最後一行的網址 \n \n 案login登入→密碼admin \n 二、開啟8444 \n 先到scad2資料夾找到http-server.py檔案 \n \n 使用白窗開啟http-server.py \n 點選Tools→go \n \n 三、製作金鑰 \n 點選資料夾的Portablegit →bin→sh.exe \n \n 輸入ssh-keygen -t rsa -b 4096 -C "40823245" \n 請自行改成自己的學號 \n 案enter →輸入/y/tmp/id_rsa→案2次enter \n \n 下載putty、putty_home、GitExtensions \n 將start移到白窗\xa0 並新增\xa0 \n set GIT_HOME=%Disk%:\\Portablegit\\bin\\\nset GIT_SSH=%Disk%:\\putty\\plink.exe \n \n \n 打開.git資料夾，把config移到白窗 \n 如沒有.git資料夾 打開隱藏的項目 \n \n 新增 [remote "origin"]裡的 url = git@github.com:40823245/cad2020.git \n \n file→save \n 打開putty資料夾的puttygen.exe \n 點load，找到id_rsa \n \n 案是→Save private key→案是→輸入學號(存.ppk檔) \n 打開putty.exe \n \n 若沒有github.com，在Host Name和Save Sessions打 github.com案Save \n 設定proxy(使用自家網路、手機網路請選None) \n 看你的網路連到哪一台 就打一樣的proxy \n 打開SSH裡面的Auth \n 選擇你所生產的金鑰檔案(.ppk) \n 回到session點選save再open \n \n 在home新增.ssh資料夾 \n ProxyCommand y:/putty/plink.exe github.com %h %p\n \nHost github.com\n    User git\n    Port 22\n    Hostname github.com\n \n    TCPKeepAlive yes\n    IdentitiesOnly yes\n\n \n \n 將上面的指令複製到白窗並另存config \n 到倉儲網頁新增金鑰(右上Settings) \n \n 點New SSH key \n 到tmp找到id_rsa.pub並用白窗開啟，複製內容到Key \n 並確認學號 \n \n \n 案Add SSH key \n 四、進行上傳 \n 方法一 \n 先進到scad2\xa0 →\xa0cd tmp/scad2 \n git add . \n git commit -m "此更新的主旨" \n git push \n 輸入帳號(學號) \n 輸入密碼 \n 方法二(啟用ssh) \n 要先改.git裡面的config \n [remote "origin"]把之前的https加上# \n \n 開啟putty(putty.exe)\xa0 \xa0將設定調好 \n 點github.com\xa0 案load \n 設定proxy(使用自家網路、手機網路請選None) \n 看你的網路連到哪一台 就打一樣的proxy \n 打開SSH裡面的Auth \n 選擇你所生產的金鑰檔案(.ppk) \n 回到session點選save再open \n \n 出現上圖就代表成功 \n 一樣先進到scad2\xa0 →\xa0cd tmp/scad2 \n git add . \n git commit -m "此更新的主旨" \n git push \n (此方法不需打帳號密碼) \n 方法三(啟用ssh) \n 使用資料夾的GitExtensions \n 點選GitExtensions.exe \n 修改設定 \n \n \n 確認正確以後\xa0 \xa0點OK \n 選擇Create new repository \n \n brown找到scad2資料夾後點Create \n 點tools→Git GUI \n \n 先點Stage Changed(=git add .) \n \n 案是 \n \n 案Continue \n \n 左下的框會出現資料 \n 然後右下的位置打上這次變更的主旨(= git commit -m "此更新的主旨" )可輸入中文 \n \n 點Commit→Push →Push \n \n 五、修改網頁標題 \n 打開資料夾找到init.py \n \n 使用白窗打開 \n \n 找到並修改成site_title = "學號 cad2020" \n file→save就可完成', 'tags': '', 'url': '筆記.html'}]};