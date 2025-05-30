# EasilyPanel 3 v3.3.2 发布说明

发布日期：2024-05-20

## 主要更新

### 🛠️ 交互式初始化配置

在此版本中，我们添加了交互式初始化配置功能。当首次启动EasilyPanel 3或未检测到配置文件时，系统会自动引导用户完成基本设置，包括：

- **管理员账户设置**：自定义用户名和密码，或使用默认设置
- **安全密码生成**：如果用户选择不设置密码，系统会自动生成随机安全密码
- **Web面板端口配置**：默认端口更改为5051，用户可以自定义
- **Java路径设置**：可选择手动设置或自动检测系统Java
- **内网穿透工具配置**：可选择设置frpc可执行文件路径

这一更改带来了以下好处：

1. **提升首次使用体验**：新用户可以更轻松地完成初始设置
2. **增强安全性**：支持随机生成安全密码，减少使用默认弱密码的风险
3. **简化配置过程**：通过命令行向导提示，引导用户完成各项设置
4. **自动验证设置**：验证Java路径和frpc路径的有效性，减少配置错误

### ⚙️ 其他改进

- **默认端口调整**：默认Web面板端口从5000更改为5051，避免与常用服务冲突
- **优化配置文件结构**：改进配置文件组织，为未来功能扩展做准备
- **增强错误处理**：提高配置过程中的错误处理能力

## 如何升级

1. 下载最新的v3.3.2版本
2. 备份您当前的配置文件和数据
3. 安装新版本（或替换相关文件）
4. 重启管理面板

**注意**：如果您已有配置文件，升级后初始化配置功能不会自动启动。只有在首次安装或配置文件丢失时，才会触发初始化配置向导。

## 兼容性说明

本次更新不影响现有配置和数据，可以无缝升级。只有默认Web端口从5000更改为5051可能需要注意，但已有配置文件的用户不受影响。

## 问题反馈

如果您在使用过程中遇到任何问题，请通过以下方式反馈：

- GitHub Issues: https://github.com/Easily-miku/EasilyPanel/issues
- 电子邮件: your-email@example.com

## 致谢

感谢所有提供反馈和建议的用户，您的支持是我们不断改进的动力！ 