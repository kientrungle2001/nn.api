module.exports = {
	tableName: 'news_comment',
	attributes: {
		newsId: {
			type: 'number',
			columnType: 'int'
		},
		content: {
			type: 'string',
			columnType: 'text'
		},
		likes: {
			type: 'number',
			columnType: 'int'
		},
		ip: {
			type: 'string',
			columnType: 'varchar'
		},
		userId: {
			type: 'number',
			columnType: 'int'
		},
		creatorId: false,
		modified: false,
		modifiedId: false,
		// Ket noi voi model CmsNews
		newsId: {
			model: 'CmsNews'
		}
	}
};