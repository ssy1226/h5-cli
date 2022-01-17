#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const create_1 = tslib_1.__importDefault(require("./command/create"));
const commander_1 = require("commander");
const program = new commander_1.Command();
program
    .version(require('./../package.json').version)
    .usage('<command> [options]');
/**
 * 创建项目脚本
 */
program
    .command('create <appName>')
    .description('创建新项目')
    .action(create_1.default);
/**
 * 序列化命令行参数
 */
program.parse(process.argv);

/**
 * 如果命令参数为空直接显示提示
 */
if (!program.args.length) {
    program.help();
    process.exit();
}

/**
 * 如果有异常出现则直接退出当前命令
 */
 process.on('unhandledRejection', () => {
    process.exit();
});