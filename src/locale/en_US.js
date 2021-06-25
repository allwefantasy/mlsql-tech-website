import React from "react";

const en_US = {
    blog: "Blog",
    tutorial: "Documentation",
    community: "Community",
    downloads: "Downloads",
    video: "Video",
    desc: "The Programming Language Designed For Big Data and AI",
    desc2: "The Unified Platform for Data Management, Business Analysis and Machine Learning",
    ease_of_use: "Easy-to-use",
    ease_of_use_desc: ` With SQL as the basic syntax, build-in support for command line and embeded Python, MLSQL enables distributed big data processing in a fast and flexible manner.`,
    data_security: "Data Security",
    data_security_desc: `MLSQL ensures end-to-end data security by enabling up to column granularity access control and syntax constrains`,
    open_source: "Open Source",
    open_source_desc: `MLSQL core engine is under Apache V2 license and source code is publicly accessable on GitHub/Gitee`,
    download: "Downloads",
    started: "Get Started",
    code_example: "Examples",
    raw_code_example: `load libsvm.\`sample_libsvm_data.txt\` as data;

train data as RandomForest.\`/tmp/model\`;

register RandomForest.\`/tmp/model\` as rf_predict;

select rf_predict(features) from data as result;`,
    try_online_guide: "Try Online",
    try_online_guide_desc: "Get yourself familiar with MLSQL syntax and Analytic Workspace",
    join_wechat_group: "Join Wechat Group",
    join_wechat_group_desc: "Scan the QR code and send the keyword mlsql to join the wechat group.",
    aliyun_support: "Cloud Native",
    aliyun_support_desc: "Use MLSQL and analytics workspace to process your own data stored on Ali Cloud via http://analysis.mlsql.tech/",
    aliyun_support_desc2: "MLSQL engines can be easily deployed not only via Yarn, but also on clouds with K8S supports",
    load_save_1: "Easy to Use Web IDE",
    load_save_1_desc: "Manage your MLSQL scripts/notebook in Web IDE",
    load_save_1_code: `load excel.\`/tmp/data.excel\` as table1;
load hive.\`db.table\` as table1;
...
load es.\`db.table\` as table1;
save overwrite table1 as hive.\`db.table2\`;
`,
    load_save_2: "Clear and efficient syntax",
    load_save_2_desc: "MLSQL provides an unified language for big data ETL and machine learning",
    load_save_2_code: `select * from table1 as newtable;

select split(col1) as col1 as newtable as output;
`,
    load_save_3: "No code analytics workshop",
    load_save_3_desc: "No code plugins and tools can be easily developed thanks to excellent expresssion ability of MLSQL",
    load_save_4: "Advanced AI support",
    load_save_4_desc: "Use advanced modules to train predict machine learning models and make predictions",
    load_save_4_code: `!pyInclude python_example.foreach.py named wow1;

load delta.\`public.consumer_complains\` as cc;

!ray on newcc py.wow1 named mlsql_temp_table2;
`,

}
export default en_US