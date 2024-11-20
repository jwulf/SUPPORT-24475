import { Camunda8 } from '@camunda8/sdk'

const camunda = new Camunda8()

const zeebe = camunda.getZeebeGrpcApiClient()

zeebe.createWorker({
    taskType: 'test',
    taskHandler: (job) => {
        console.log('Job:', job)
        return job.complete()
    }
}).on('ready', () => {
    console.log('Worker is ready!')
})