const marked = require('marked');

const tc = '```' + `
$ top          # CPU使用率順にソート
$ top -a       # メモリ使用率順にソート
$ top -p [PID] # 特定のプロセスを監視
$ top -d [s]   # s秒ごとに更新
` + '```'

const sc = '```' + `
Shift+o: 表示された特定のキーを押してEnterすると任意の列でソートできる
Shift+p: CPU使用率順にソート
Shift+m: メモリ使用率順にソート
` + '```'

const re = '```' + `
top - 14:29:38 up 1 day, 21:07,  1 user,  load average: 1.18, 1.27, 1.11
Tasks: 424 total,   1 running, 350 sleeping,   0 stopped,   0 zombie
%Cpu(s): 25.2 us,  5.4 sy,  0.2 ni, 68.0 id,  0.1 wa,  0.0 hi,  1.2 si,  0.0 st
KiB Mem : 14280684 total,  1613724 free,  8094220 used,  4572740 buff/cache
KiB Swap:  1003516 total,   999952 free,     3564 used.  5545680 avail Mem 
` + '```'

const cpu = '```' + `
物理CPUの数
$ grep physical.id /proc/cpuinfo | sort -u | wc -l
1

CPUごとのコア数
$ grep physical.id /proc/cpuinfo | sort -u | wc -l
cpu cores: 4
` + '```'

const vmstat = '```' + `
$ vmstat 1 5  # 1秒ごとに5回実行する

procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----
 r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st
 1  0   4588 1524292 775096 3803980    0    0    24    79  303  245 21  6 73  0  0
 0  0   4588 1523968 775120 3803844    0    0     0   336 1914 2915  1  0 99  0  0
 6  0   4588 1523788 775128 3803980    0    0     0   232 2040 2904  1  0 99  0  0
 1  0   4588 1523788 775128 3803980    0    0     0     0 1930 2767  1  0 99  0  0
 0  0   4588 1524040 775136 3803980    0    0     0   444 2087 2985  1  1 98  0  0

` + '```'


const text = `
# topコマンド
${tc}
# 表示後のソート方法
${sc}
# topコマンド表示内容
${re}

**load_average**  
1CPUにおける単位時間あたりの実行待ちとディスクI/O待ちのプロセスの数。  
（値の導出はそれぞれ左から過去1分、過去5分、過去15分のデータが元となる）

I/O負荷が0の場合、load_averageがCPUのコア数と同じであればCPU利用率が100%となる。  
逆にCPU負荷が低い場合にload_averageが高い場合はI/O負荷が高いことを表している。  

CPUのコア数はコマンドから確認できる。  
${cpu}


**%Cpu(s)**
- us: ユーザプロセスの使用時間  
- sy:	システムプロセスの使用時間  
- ni:	実行優先度を変更したユーザプロセスの使用時間  
- id:	アイドル状態の時間  
- wa:	I/Oの終了待ちをしている時間  
- hi:	ハードウェア割込み要求での使用時間  
- si:	ソフトウェア割込み要求での使用時間  
- st: ホスト上でゲストOSとVMがCPUを取り合ったことによる待ち状態の時間


# メモリ不足かどうかの判断
「Freeなメモリが少ない！」 ->  
キャッシュされたメモリだけで上手く動いていることもあるのでなんとも言えない。

「Swapメモリめっちゃ使ってる！」 ->
使用頻度が少ないメモリはSwap領域に移動させられるので、これもなんとも。

**何を見て判断すべき？**  
リアルタイムなページング状況をvmstatで確認する。
${vmstat}

- r: ランタイム待ちのプロセス数
- b: 割り込み不可なsleep状態のプロセス数
- si: ディスクからスワップインされているメモリ量(KB/s)
- so: ディスクからスワップアウトされているメモリ量(KB/s)
- bi: ブロックデバイスから受け取ったブロック (blocks/s)
- bo: ブロックデバイスに送られたブロック (blocks/s)
- in: 一秒あたりの割り込み回数。クロック割り込みも含む
- cs: 一秒あたりのコンテキストスイッチの回数

ブロックデバイスとはブロック単位でデータを読み書きできるデバイスのこと。
ハードディスクはこの方式で、キーボードのような文字ごとのやり取りを行う装置はキャラクタデバイスという。

基本的にsiとsoは0となるが、メモリが不足してる場合はメモリ管理を行う必要が出るため、スワップイン・スワップアウトが頻繁に発生することとなる。

コンテクストスイッチはプログラムの切り替え回数。プロセッサは高速で切り替えを行うことで並列処理を行っているかのように見せているが、このコンテクストスイッチが多いとその分オーバーヘッドが生じる。


# 参考文献
[topコマンドの使い方 - Qiita]
(https://qiita.com/k0kubun/items/7368c323d90f24a00c2f)

[LinuxのI/OやCPUの負荷とロードアベレージの関係を詳しく見てみる - Qiita]
(https://qiita.com/kunihirotanaka/items/21194f77713aa0663e3b)

[【Linux】Load Averageに関するいろは - Qiita]
(https://qiita.com/ryuichi1208/items/3b21aee6c38bcfdb12b1)

[Load Average はどうやって算出されているのか | TECHSCORE BLOG]
(https://www.techscore.com/blog/2017/12/08/how_is_load_average_calculated/)

[物理 CPU、CPU コア、および論理 CPU の数を確認する - Red Hat Customer Portal]
(https://access.redhat.com/ja/solutions/2159401)

[CPU使用率は間違っている | Yakst]
(https://yakst.com/ja/posts/4575)

[linux - What does %st mean in top? - Server Fault]
(https://serverfault.com/questions/230495/what-does-st-mean-in-top)

[LinuxのCPU使用率の%stealについて - Qiita]
(https://qiita.com/thatsdone/items/e9592126ec0f8d445113)

[vmstatコマンドについて調べてみた | 技術情報ブログ | マネージドホスティングのディーネット]
(https://www.denet.ad.jp/technology/2017/10/vmstat.html)

`


function html(){
  return marked(text)
}
export default {
  html
}