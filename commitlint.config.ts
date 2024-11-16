import type { UserConfig } from '@commitlint/types';

const commitlintConfig: UserConfig = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'build', // Changes to the build system or dependencies
				'chore', // Routine tasks not affecting the application code
				'ci', // Changes to Continuous Integration configuration
				'cd', // Changes to Continuous Deployment setup
				'docs', // Documentation updates
				'feat', // Addition of a new feature
				'fix', // Bug fixes
				'perf', // Performance improvements
				'improvement', // Enhancements to an existing feature
				'refactor', // Code restructuring without functionality changes
				'revert', // Reverting a previous commit
				'style', // Code formatting or style changes
				'test', // Adding or updating tests
				'conf', // Adjustments to configuration files
				'lib', // Modifications to internal libraries or modules
				'prerelease', // Preparation for pre-release versions
				'release', // Release of a new version
			],
		],
	},
};

export default commitlintConfig;
