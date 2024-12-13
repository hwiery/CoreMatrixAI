module.exports = {
  apps: [
    {
      // 개발 환경 설정
      name: 'corematrix-dev',
      script: 'npm',
      args: 'run dev',
      env: {
        NODE_ENV: 'development',
        PORT: '3000',
        NODE_OPTIONS: '--max-old-space-size=256'
      },
      watch: true,
      ignore_watch: ['node_modules', '.git', '.next'],
      watch_options: {
        followSymlinks: false
      }
    },
    {
      // 프로덕션 환경 설정
      name: 'corematrix-prod',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: '3001',
        NODE_OPTIONS: '--max-old-space-size=256'
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '256M'
    }
  ]
};