import { mainHttpClient } from '../httpClient'
import { STATE_FILTER_ALL_ITEMS } from '../constants'

const generateRequestParams = filters => {
  const params = {
    iter: false
  }

  if (filters?.labels) {
    params.label = filters.labels.split(',')
  }

  if (filters?.name) {
    params.name = `~${filters.name}`
  }

  if (filters?.state && filters.state !== STATE_FILTER_ALL_ITEMS) {
    params.state = filters.state
  }

  if (filters?.dates) {
    if (filters.dates.value[0]) {
      params.start_time_from = filters.dates.value[0].toISOString()
    }

    if (filters.dates.value[1] && !filters.dates.isPredefined) {
      params.start_time_to = filters.dates.value[1].toISOString()
    }
  }

  return params
}

const jobsApi = {
  abortJob: (project, jobId, iter) => {
    const params = {}

    if (!isNaN(iter)) {
      params.iter = iter
    }

    return mainHttpClient.patch(
      `/run/${project}/${jobId}`,
      {
        'status.state': 'aborted'
      },
      { params }
    )
  },
  editJob: (postData, project) =>
    mainHttpClient.put(
      `/projects/${project}/schedules/${postData.scheduled_object.task.metadata.name}`,
      postData
    ),
  getAllJobs: (project, filters) => {
    const params = {
      project,
      'partition-by': 'name',
      'partition-sort-by': 'updated',
      ...generateRequestParams(filters)
    }

    return mainHttpClient.get('/runs', { params })
  },
  getAllJobRuns: (project, jobName, filters) => {
    const params = {
      project,
      name: jobName,
      ...generateRequestParams(filters)
    }

    return mainHttpClient.get('/runs', { params })
  },
  getJob: (project, jobId, iter) => {
    const params = {}

    if (!isNaN(iter)) {
      params.iter = iter
    }

    return mainHttpClient.get(`/run/${project}/${jobId}`, { params })
  },
  getJobFunction: (project, functionName, hash) =>
    mainHttpClient.get(`/func/${project}/${functionName}?hash_key=${hash}`),
  getJobLogs: (id, project) => mainHttpClient.get(`/log/${project}/${id}`),
  getScheduledJobAccessKey: (project, job) =>
    mainHttpClient.get(`/projects/${project}/schedules/${job}?include-credentials=true`),
  getScheduledJobs: (project, filters) => {
    const params = {
      include_last_run: 'yes'
    }

    if (filters?.owner) {
      params.owner = filters.owner
    }

    if (filters?.name) {
      params.name = `~${filters.name}`
    }

    if (filters?.labels) {
      params.labels = filters.labels?.split(',')
    }

    return mainHttpClient.get(`/projects/${project}/schedules`, { params })
  },
  removeScheduledJob: (project, scheduleName) =>
    mainHttpClient.delete(`/projects/${project}/schedules/${scheduleName}`),
  runJob: postData => mainHttpClient.post('/submit_job', postData),
  runScheduledJob: (postData, project, job) =>
    mainHttpClient.post(`/projects/${project}/schedules/${job}/invoke`, postData)
}

export default jobsApi
