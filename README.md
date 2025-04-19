# EasilyPanel 3 - 专业的Minecraft服务器管理面板

EasilyPanel 3（Easily Minecraft Panel 3）是一个专业的Minecraft服务器管理面板，采用Python + Flask开发，提供直观的Web界面来管理您的Minecraft服务器。它支持多服务器管理、状态监控、文件管理、备份系统等功能，是一个轻量级但功能强大的管理工具。

## ✨ 主要特性

### 🎮 服务器管理
- 支持创建和管理多个服务器实例
- 实时监控服务器状态（CPU、内存使用率）
- 在线玩家列表和管理
- 服务器控制台实时输出
- 支持自定义启动参数和Java路径

### 📁 文件管理
- 在线文件编辑器
- 文件上传/下载功能
- 目录结构浏览
- 文件权限管理

### 💾 备份系统
- 支持手动/自动备份
- 备份文件管理和恢复
- 可配置备份保留数量
- 支持定时备份计划

### ⏰ 定时任务
- 支持Cron表达式
- 定时执行服务器命令
- 定时重启服务器
- 定时备份功能

### 🌐 内网穿透（OpenFrp）
- 集成OpenFrp内网穿透
- 支持管理多条隧道
- 实时显示隧道状态
- 一键开启/关闭隧道

### 🛡️ 安全特性
- 登录验证系统
- 密码加密存储
- 操作日志记录
- 支持反向代理

## 🚀 快速开始

### 环境要求
- Python 3.8+
- Java（用于运行Minecraft服务器）
- 现代浏览器（Chrome、Firefox、Edge等）

### 初始化配置

首次启动时，EasilyPanel 3会引导您完成初始设置：

1. 设置管理员账户和密码（留空则使用默认值或生成随机密码）
2. 配置Web面板端口（默认5051）
3. 设置Java路径（可选，留空则自动检测）
4. 设置frpc内网穿透工具路径（可选）

所有设置将保存在`config/config.json`文件中，您可以随时手动编辑此文件。

### 方式一：源码运行

1. 克隆仓库或下载源码：
   ```bash
   git clone https://github.com/Easily-miku/EasilyPanel.git
   cd EasilyPanel
   ```

2. 安装依赖：
   ```bash
   pip install -r requirements.txt
   ```

3. 运行程序：
   ```bash
   python app.py
   ```

4. 访问Web界面：
   - 打开浏览器访问 `http://localhost:5000`
   - 默认账号：admin
   - 默认密码：admin

### 方式二：直接运行py文件


## 📝 配置说明

### 配置文件
配置文件位于 `config/config.json`，包含以下主要设置：
- `web_port`: Web面板端口号
- `security`: 安全相关配置
- `java_paths`: Java路径配置
- `quick_commands`: 快捷命令配置
- `servers`: 服务器配置

### Java配置
- 支持自动检测系统Java
- 可手动添加多个Java路径
- 支持为每个服务器指定不同的Java版本

### 快捷命令
预设快捷命令包括：
- op：设置管理员
- gamemode：更改游戏模式
- time：设置时间
- weather：设置天气

## 🔌 内网穿透配置

### Windows用户
1. 访问 [OpenFrp官网](https://www.openfrp.net) 注册账号
2. 下载frpc.exe客户端
3. 将frpc.exe放置在程序目录的frpc文件夹中
4. 在面板中配置Token和Authorization

### Linux用户
1. 安装frpc
   ```bash
   # Debian/Ubuntu
   apt-get install frpc

   # CentOS
   yum install frpc
   ```
2. 确保frpc在系统PATH中
3. 在面板中配置相关信息

## ⚠️ 注意事项

### 安全建议
1. 首次使用后立即修改默认密码
2. 建议使用反向代理（如Nginx）并启用HTTPS
3. 配置防火墙规则，只允许必要的端口访问
4. 定期备份服务器数据和配置文件
5. 不要在公网直接暴露管理面板
6. 定期检查并更新系统

### 性能优化
1. 合理设置Java内存参数
2. 根据需要调整备份策略
3. 适当配置定时任务间隔
4. 及时清理不需要的日志和备份

## 🔍 常见问题

### 无法启动服务器
- 检查Java路径配置是否正确
- 确认服务器端口未被占用
- 查看日志获取详细错误信息

### 内存使用异常
- 检查Java启动参数配置
- 确认系统可用内存充足
- 适当调整最大内存限制

### 内网穿透问题
- 确认frpc程序存在且配置正确
- 检查OpenFrp账号配置
- 查看隧道日志排查问题

## 🤝 贡献指南

欢迎提交Pull Request和Issue！在提交之前，请：
1. Fork本仓库并创建新分支
2. 确保代码符合项目规范
3. 提供清晰的提交信息
4. 更新相关文档

## 📜 开源协议

本项目采用MIT协议开源，详见 [LICENSE](LICENSE) 文件。

## 🌟 致谢

感谢以下开源项目：
- Flask
- PyInstaller
- APScheduler
- OpenFrp

## 📞 联系方式

- 项目主页：[GitHub](https://github.com/Easily-miku/EasilyPanel)
- 问题反馈：[Issues](https://github.com/Easily-miku/EasilyPanel/issues)
- 邮箱：your-email@example.com

---
如果觉得这个项目对你有帮助，欢迎点个Star⭐支持一下！

## 使用Nuitka打包

此项目可以使用Nuitka打包成可执行文件，便于在没有Python环境的系统上运行。

### 打包步骤

1. 确保已安装Python环境（建议Python 3.8或更高版本）
2. 将frpc.exe文件放入frpc目录中（用于OpenFrp内网穿透功能）
3. 运行`开始打包.bat`或者手动执行`python build.py`
4. 等待打包完成，打包好的文件将放在dist目录下

### 打包后使用方法

1. 将dist目录下的所有文件拷贝到目标机器
2. 运行`启动EasilyPanel.bat`即可启动管理面板
3. 在浏览器中访问 http://localhost:5000 进入管理界面
4. 默认用户名: admin，默认密码: admin（建议第一次登录后立即修改密码）

### 注意事项

- 打包过程可能需要几分钟到几十分钟，取决于计算机性能
- 打包需要下载一些依赖，请确保网络连接正常
- 如果不提供frpc.exe，OpenFrp内网穿透功能将无法使用

## 版本历史

### v3.3.2 (2024-05-20)

- 添加初始化配置引导功能，首次启动时自动引导用户设置
- 支持设置管理员账户、密码、端口、Java路径和frpc路径
- 支持随机生成安全密码
- 自动验证Java路径的有效性
- 默认Web面板端口从5000更改为5051
- 优化配置文件结构

### v3.3.1 (2024-05-14)

- 优化在线玩家检测机制，不再发送list命令，改为分析日志
- 减少服务端控制台的无用输出信息，提高性能
- 解决玩家列表统计频繁刷新导致的控制台垃圾信息问题
- 前端调整更新频率，减少服务器负载
- 更准确地跟踪玩家加入和离开的状态
- 增加玩家数据缓存，提高性能

### v3.3.0 (2024-04-06)

- 添加命令行菜单系统，提供更直观的控制界面
- 添加自定义frpc路径设置功能
- 优化日志系统，重定向输出到日志文件
- 优化静态资源加载，解决离线环境下的资源加载问题
- 修复了JavaScript错误和文件加载问题
- 增强错误处理和故障排除功能
- 添加打包脚本与完整的打包支持

### v3.2.0 (2024-03-19)

- 初始版本发布
- 基础的Minecraft服务器管理功能
- Web界面支持
- OpenFrp内网穿透集成
