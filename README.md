kill -9 $(lsof -t -i:5173)

tree -I "node_modules|.git|.next|out|dist" > tree.txt   