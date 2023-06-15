## pnpm monorepo

### 安装所有package中的依赖
pnpm install 
### 将axios库安装到根目录
pnpm install -w axios
pnpm install -w -D axios
pnpm add -w prettier
pnpm add -w -D prettier

### 执行某个package下的命令
pnpm --filter | -F <name> <command> 

###  创建软连接指向本地 workspace
"@apus-run/react-hooks": "workspace:^0.1.0"