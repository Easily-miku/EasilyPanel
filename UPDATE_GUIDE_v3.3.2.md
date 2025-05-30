# EasilyPanel 3 v3.3.2 更新指南

本文档将指导您从先前版本升级到EasilyPanel 3 v3.3.2。

## 更新方法

### 方法一：替换文件（推荐）

1. **备份您的数据**：
   - 备份`config`目录中的所有文件
   - 备份`servers`目录（如果您希望保留现有服务器）
   - 备份自定义的任何其他文件

2. **下载最新版本**：
   - 从官方下载最新的v3.3.2安装包

3. **替换文件**：
   - 停止正在运行的EasilyPanel 3管理面板
   - 将新版本中的`app.py`替换旧版本的文件
   - 如果您修改过前端代码，请注意比较`templates/index.html`文件中的更改

4. **恢复备份**：
   - 将您备份的`config`目录恢复到新安装中
   - 将您备份的`servers`目录恢复到新安装中

5. **启动新版本**：
   - 使用常规方式启动EasilyPanel 3
   - 检查是否一切正常工作

### 方法二：源码更新

如果您是使用源码运行EasilyPanel 3，请按照以下步骤更新：

1. **拉取最新代码**：
   ```bash
   git pull origin main
   ```

2. **安装/更新依赖**：
   ```bash
   pip install -r requirements.txt
   ```

3. **重启服务**：
   停止当前运行的实例，然后重新启动

## 配置变更说明

v3.3.2主要添加了初始化配置功能，但不会强制现有用户重新配置。主要变更包括：

- **默认端口**：新安装的默认Web端口从5000更改为5051
- **配置文件结构**：略微调整了配置文件结构

对于已有配置文件的用户，这些变更不会产生任何影响。

## 初始化配置功能

新版本添加了初始化配置功能，它只在以下情况下触发：

1. 首次安装EasilyPanel 3
2. 配置文件丢失或损坏

如果您想体验这一功能，可以备份并删除`config/config.json`文件，然后重启面板。系统会引导您完成初始设置。

## 可能的问题和解决方案

### 问题：升级后端口变化

**解决方案**：
如果您使用的是现有配置文件，端口不会自动更改。如果您希望使用新的默认端口5051，可以手动修改`config/config.json`文件中的`web_port`字段。

### 问题：初始化配置不启动

**解决方案**：
初始化配置只在没有配置文件时启动。如果您想重新配置，请备份并删除`config/config.json`文件，然后重启面板。

## 功能验证

升级完成后，建议进行以下测试以确保功能正常：

1. **面板访问检查**：确认可以使用现有账户正常登录
2. **服务器管理**：确认可以正常管理现有服务器
3. **在线玩家检测**：验证v3.3.1中添加的在线玩家检测功能仍然正常工作

## 反馈与支持

如果您在升级过程中遇到任何问题，请通过以下方式寻求帮助：

- GitHub Issues: https://github.com/Easily-miku/EasilyPanel/issues
- 电子邮件: your-email@example.com

---

感谢您使用EasilyPanel 3！我们致力于不断改进和完善这个项目。 