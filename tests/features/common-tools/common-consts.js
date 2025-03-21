module.exports = {
  Project: {
    Create_New_Options: [
      'Job',
      'ML Function',
      'Feature Set',
      'Register Artifact',
      'Register Model',
      'Register Dataset'
    ],
    Online_Status: 'online',
    Data_Collection_Description:
      'This section enable users to upload data , crate features and register external data. Keep in mind that this ' +
      'explaination is only temporary and should be replaced soon enough. This is not the final version.',
    Development_Description:
      'This section enables users to develop and run functions as jobs or workflows. Those jobs can run various ' +
      'processing types including model training, data processing and more. This is not the final version.',
    Deployment_Description:
      'This section enables users to deploy models, deploy real time graph and run real time pipelines at scale. ' +
      'This is not the final version.'
  },
  Feature_Store: {
    Tab_List: ['Feature Sets', 'Features', 'Feature Vectors']
  },
  Models: {
    Tab_List: ['Models', 'Model Endpoints (Beta)', 'Real-Time Pipelines']
  },
  Real_Time_Pipeline_Pane: {
    Overview_Headers: [
      'Type:',
      'After:',
      'Class name:',
      'Function name:',
      'Handler:',
      'Input path:',
      'Result path:'
    ]
  },
  Feature_Sets_Info_Pane: {
    Tab_List: ['Overview', 'Features', 'Transformations', 'Preview', 'Statistics', 'Analysis'],
    Overview_General_Headers: [
      'Description',
      'Labels',
      'Version tag',
      'Last updated',
      'Entities',
      'URI',
      'Timestamp key',
      'Label column',
      'Usage example'
    ]
  },
  Feature_Vectors_Info_Pane: {
    Tab_List: ['Overview', 'Requested Features', 'Analysis'],
    Overview_General_Headers: [
      'Description',
      'Labels',
      'Version tag',
      'Last updated',
      'Entities',
      'URI',
      'Timestamp key',
      'Label column',
      'Usage example'
    ]
  },
  Datasets_Info_Pane: {
    Tab_List: ['Overview', 'Preview', 'Metadata'],
    Overview_General_Headers: [
      'Hash',
      'Key',
      'Tag',
      'Iter',
      'Size',
      'Path',
      'URI',
      'UID',
      'Updated',
      'Labels'
    ]
  },
  ML_Functions_Tab: {
    Common_Action_Menu_Options: ['View YAML', 'Edit', 'Delete'],
    Serving_Action_Menu_Options: ['View YAML', 'Delete']
  },
  ML_Function_Info_Pane: {
    Tab_List: ['Overview', 'Code', 'Build Log'],
    Overview_Headers: [
      'Name',
      'Kind',
      'Hash',
      'Code origin',
      'Updated',
      'Command',
      'Image',
      'Description'
    ]
  },
  Files_Info_Pane: {
    Tab_List: ['Overview', 'Preview'],
    Overview_General_Headers: [
      'Hash',
      'Key',
      'Tag',
      'Iter',
      'Size',
      'Path',
      'URI',
      'UID',
      'Updated',
      'Labels'
    ]
  },
  Models_Info_Pane: {
    Tab_List: ['Overview', 'Preview'],
    Tab_List_Extended: ['Overview', 'Preview', 'Features', 'Statistics'],
    Overview_General_Headers: [
      'Hash',
      'Key',
      'Tag',
      'Iter',
      'Kind',
      'Size',
      'Path',
      'URI',
      'Model file',
      'Feature vector',
      'UID',
      'Updated',
      'Framework',
      'Algorithm',
      'Labels',
      'Metrics'
    ]
  },
  Models_Endpoints_Info_Pane: {
    Tab_List: ['Overview', 'Features Analysis'],
    Overview_General_Headers: [
      'UID',
      'Model class',
      'Model artifact',
      'Function URI',
      'Last prediction',
      'Error count',
      'Accuracy',
      'Stream path'
    ],
    Overview_Drift_Headers: ['Mean TVD', 'Mean Hellinger', 'Mean KLD']
  },
  New_Feature_Store: {
    Kind_Options: ['HTTP', 'CSV', 'PARQUET'],
    Combobox_Options: [
      'MLRun store',
      'V3IO',
      'S3',
      'Azure storage',
      'Go-ogle storage',
      'Google storage'
    ],
    Target_Store_File_Type: ['CSV', 'TSDB', 'Parquet', 'NoSql', 'Dataframe', 'Custom'],
    Target_Store_Path_Annotation:
      'Note that in order to keep the feature set versioning you need to keep the {run-id} as part of the path.'
  },
  Create_New_Job: {
    Combobox_Options: [
      'MLRun store',
      'V3IO',
      'S3',
      'HTTP',
      'HTTPS',
      'Azure storage',
      'Google storage'
    ]
  },
  Register_Artifact: {
    Type_Options: ['General', 'Chart', 'Plot', 'Table'],
    Form_Text:
      /This dialog enable users to register an artifact( as a dataset)? in Iguazio database\. Once (a artifact|the dataset) is registered it can be consumed by jobs and workflows\./,
    Form_Subtext:
      'All you need to do is enter the name of the artifact and the URL (e.g. s3://my-bucket/path).'
  },
  Project_Settings: {
    Tab_List: ['General', 'Members', 'Secrets']
  },
  Input_Hint: {
    Artifact_Names_Unique: 'Artifact names in the same project must be unique',
    Artifact_Name_Hint:
      'Valid characters: a–z, A–Z, 0–9, –, _, .\nMust begin and end with: a–z, A–Z, 0–9\nLength – max: 253\n' +
      'This field is required',
    Project_Name_Hint:
      'Valid characters: a–z, 0–9, –\nMust begin with: a–z\nMust end with: a–z, 0–9\nLength – max: 63\n' +
      'This field is required',
    Feature_Set_Name_Hint:
      'Valid characters: a–z, A–Z, 0–9, –, _, .\nMust begin and end with: a–z, A–Z, 0–9\nLength – max: 56\n' +
      'This field is required',
    Feature_Set_Version_Hint:
      'Valid characters: a–z, A–Z, 0–9, –, _\nMust begin and end with: a–z, A–Z, 0–9\nLength – max: 56',
    Jobs_Name_Hint:
      'Valid characters: a–z, A–Z, 0–9, –, _, .\nMust begin and end with: a–z, A–Z, 0–9\nLength – max: 63\n' +
      'This field is required',
    Input_Field_Require: 'This field is required',
    Input_Field_Invalid: 'This field is invalid',
    Input_Field_Unique: 'Name should be unique',
    URL_Field_Require: 'URL is required',
    Key_Bucketing_Number_Hint:
      'If you partition by key and the number of unique keys is very high it is recommended to use buckets for ' +
      'better performance. In this case the path would be path/bucket-num/year=/month=/day= etc.. In case the ' +
      'value is 0 then no bucketing will be done and your data will be partitioned by key.',
    Function_Name_Hint:
      'Valid characters: a–z, A–Z, 0–9, –, _, .\nMust begin and end with: a–z, A–Z, 0–9\nLength – max: 63\n' +
      'This field is required',
    Function_Tag_Hint:
      'Valid characters: a–z, A–Z, 0–9, –, _, .\nMust begin and end with: a–z, A–Z, 0–9\nLength – max: 56',
    Function_Handler_Hint:
      'Enter the function handler name (e.g. for the default sample function the name should be `handler`)',
    Image_Name_Hint: 'The name of the function‘s container image',
    Resulting_Image_Hint: 'The name of the built container image',
    Base_Image_Hint:
      "The name of a base container image from which to build the function's processor image",
    Limit_Number_Warning: 'Limit must be bigger than or equal to Request and not be less than 1',
    CPU_Limit_Number_Warning:
      'Limit must be bigger than or equal to Request and not be less than 0.001',
    Request_Number_Warning: 'Request must be less than or equal to Limit and not be less than 1',
    CPU_Request_Number_Warning:
      'Request must be less than or equal to Limit and not be less than 0.001',
    GPU_Minimum_Value_Warning: 'The minimum value should be 1',
    Mount_Path_Hint: 'A mount path for referencing the data from the function',
    Data_Container_Hint: 'The name of the data container that contains the data',
    DataAccess_Key_Hint: 'A platform data-access key',
    Name_Already_Exists: 'Name already exists',
    Volumes_Path_Already_Exists: 'Multiple volumes cannot share the same path',
    Timestamp_Key_Hint: 'Used for specifying the time field when joining by time',
    Timestamp_Key_Warning:
      'Timestamp Key is required for offline target when partitioning by time is enabled - see the Target Store section.',
    Relative_Directory_Path_Hint: 'A relative directory path within the data container',
    Stream_Path_Hint: 'Enables users to store the function error in a V3IO stream',
    Add_Feature_Vector_Hint: 'Add features from the list on the left to this feature vector',
    Deploy_Model_Name_Hint:
      'After the function is deployed, it will have a URL for calling the model that is based upon this name.',
    MLRun_Store_Path_Hint: 'Field must be in "artifacts/my-project/my-artifact:my-tag" format',
    Jobs_MLRun_Store_Path_Hint:
      'Field must be in "artifacts/my-project/my-artifact:my-tag" or "artifacts/my-project/my-artifact@my-uid" format',
    V3IO_Path_Hint: 'Field must be in "container-name/file" format',
    S3_Path_Hint: 'Field must be in "bucket/path" format',
    Azure_Storage_Path_Hint: 'Field must be in "container/path" format',
    Timestamp_Column: 'The field name for filtering the source data.',
    Start_Time_Input: 'Filter data by start date >= value',
    End_Time_Input: 'Filter data by start date <= value',
    Target_Store_Online: 'Store the feature set in Iguazio NoSQL database',
    Target_Store_Offline: 'Store the feature set as a Parquet file in Iguazio object store',
    Target_Store_External_Offline:
      'Store the feature set in a remote object store (e.g. AWS S3 or Azure storage)',
    Distinct_Keys: 'The partition is based on key.',
    Source_URL_Input:
      'Source URL is the Git Repo that is associated with the project. When the user pulls the project it will use the source URL to pull from',
    SECRET_INPUT_HINT:
      '• Valid characters: A-Z, a-z, 0-9, -, _, .\n' +
      '• Must begin and end with: A-Z, a-z, 0-9\n' +
      '• No consecutive characters: .., .–, –.\n' +
      '• Max length between two periods: 63\n' +
      '• Length - max: 253',
    VALUE_INPUT_HINT:
      '• Valid characters: A-Z, a-z, 0-9, -, _, .\n' +
      '• Must not start with: ..\n' +
      '• Must not be: ., ..\n' +
      '• Length - max: 253'
  },
  Label_Hint: {
    New_Job_Volumes:
      'Volumes that define data paths and the required information for accessing the data from the function',
    Members_Hint: 'Some of the members might be user groups',
    Overview_Hash: 'Represents hash of the data. when the data changes the hash would change',
    Overview_UID:
      'Unique identifier representing the job or the workflow that generated the artifact',
    Feature_Analysis: 'The statistics are calculated on the last rolling hour of data'
  },
  Descriptions: {
    Archive_Project:
      "Note that moving a project to archive doesn't stop it from consuming resources. We recommend that before " +
      "setting the project as archive you'll remove scheduled jobs and suspend Nuclio functions.",
    Delete_Project: /You try to delete project "[^"]+[$"]\. Deleted projects can not be restored\./,
    Delete_Function:
      /You try to delete function "[^"]+[$"]\. Deleted functions cannot be restored\./,
    Delete_Scheduled_Job:
      /You try to delete scheduled job "[^"]+[$"]\. Deleted scheduled jobs can not be restored\./,
    Delete_Feature:
      /You try to delete feature "[^"]+[$"] from vector "[^"]+[$"]\. The feature could be added back later./
  },
  Jobs_And_Workflows: {
    Tab_List: ['Monitor Jobs', 'Monitor Workflows', 'Schedule'],
    Job_Action_Menu_Options: ['View YAML', 'Re-run', 'Monitoring'],
    Workflows_Action_Menu_Options: ['View YAML'],
    Pending_Job_Action_Menu_Options: ['View YAML', 'Re-run', 'Monitoring', 'Abort'],
    Schedule_Action_Menu_Options: ['View YAML', 'Run now', 'Edit', 'Delete']
  },
  Jobs_Monitor_Tab_Info_Pane: {
    Tab_List: ['Overview', 'Inputs', 'Artifacts', 'Results', 'Logs', 'Pods'],
    Overview_Headers: [
      'UID',
      'Start time',
      'Last Updated',
      'Parameters',
      'Function',
      'Results',
      'Labels',
      'Log level',
      'Output path',
      'Total iterations'
    ]
  },
  Jobs_Monitor_Tab: {
    'Any time': 'Any time',
    'Past hour': 3600000,
    'Past 24 hours': 86400000,
    'Past week': 604800000,
    'Past month': { min: 2419200000, max: 2678400000 },
    'Past year': 31536000000
  },
  Date_Time_Picker: {
    Error_Message: '“To” must be later than “From”'
  },
  Error_Messages: {
    Project_Already_Exists: /Project name "[^"]+[$"] already exists/,
    Projects_Limit_Reached:
      'Cannot create more than 200 projects due to resource limitation. Either delete existing projects or contact our customer support for assistance',
    Must_Select_One: 'Must select at least one',
    Already_Scheduled: 'This job is already scheduled'
  },
  Dropdown_Options: {
    Tag_Filer_Options: ['All', 'latest'],
    Status_Filter_Options: ['All', 'Completed', 'Running', 'Pending', 'Error', 'Aborted'],
    Group_By_Filter_Options: ['None', 'Name'],
    Start_Time_Filter_Options: [
      'Any time',
      'Past hour',
      'Past 24 hours',
      'Past week',
      'Past month',
      'Past year',
      'Custom range'
    ],
    Parameters_Table_Type_Options: ['str', 'int', 'float', 'bool', 'list', 'map'],
    Parameter_Table_Simple_Hyper_Options: ['Simple', 'Hyper'],
    Turning_Strategy_Options: ['List', 'Grid', 'Random'],
    Criteria_Dropdown_Options: ['Max', 'Min'],
    Volume_Mount_Options: ['Auto', 'Manual', 'None'],
    Memory_Unit_Options: [
      'Bytes',
      'KB',
      'KiB',
      'MB',
      'MiB',
      'GB',
      'GiB',
      'TB',
      'TiB',
      'PB',
      'PiB',
      'EB',
      'EiB'
    ],
    CPU_Unit_Options: ['cpu', 'millicpu'],
    Partition_Granularity_Options: ['Second', 'Minute', 'Hour', 'Day', 'Month', 'Year'],
    Pods_Priority: ['Low', 'Medium', 'High'],
    Pods_Toleration: ['Allow', 'Constrain', 'Prevent'],
    Schedule_Variants: ['Minute', 'Hourly', 'Daily', 'Weekly', 'Monthly'],
    Schedule_Minutes_Variants: ['10', '15', '20', '30'],
    Schedule_Hours_Variants: ['1', '2', '3', '4', '6', '12']
  },
  No_Data_Message: {
    Common_Message: 'No data to show',
    No_Features_Yet: 'No features yet. Go to "Feature Sets" tab to create your first feature set.',
    No_Consumer_Group_Yet: 'You haven’t created any consumer group yet'
  }
}
