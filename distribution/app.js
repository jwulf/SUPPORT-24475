"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = require("@camunda8/sdk");
const camunda = new sdk_1.Camunda8();
const zeebe = camunda.getZeebeGrpcApiClient();
zeebe.createWorker({
    taskType: 'test',
    taskHandler: (job) => {
        console.log('Job:', job);
        return job.complete();
    }
}).on('ready', () => {
    console.log('Worker is ready!');
});
