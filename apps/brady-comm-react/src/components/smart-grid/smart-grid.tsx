
import 'smart-webcomponents-react/source/styles/smart.default.css';
import React from "react";
import { Smart, Grid } from 'smart-webcomponents-react/grid';
import styles from './smart-grid.module.css';
  

/* eslint-disable-next-line */
export interface SmartGridProps {
}

export function SmartGrid(props: SmartGridProps) {
  const behavior = {
		columnResizeMode: 'growAndShrink'
	}

	const appearance = {
		alternationCount: 2,
		showRowHeader: true,
		showRowHeaderSelectIcon: true,
		showRowHeaderFocusIcon: true
	}

	const paging = {
		enabled: true
	}

	const pager = {
		visible: true
	}

	const sorting = {
		enabled: true
	}

	const editing = {
		enabled: true
	}
	
	const filtering = {
		enabled: true
	}

  const selection = {
		enabled: true
  }

  const grouping = {
		enabled: true
  }


  const dataSource = new Smart.DataAdapter({
    dataSource: [  
        { "firstName": "Beate", "lastName": "Wilson", "productName": "Caramel Latte"},   
        { "firstName": "Ian", "lastName": "Nodier", "productName": "Caramel Latte"},   
        { "firstName": "Petra", "lastName": "Vileid", "productName": "Green Tea"},   
        { "firstName": "Mayumi", "lastName": "Ohno", "productName": "Caramel Latte"},   
        { "firstName": "Mayumi", "lastName": "Saylor", "productName": "Espresso con Panna"},   
        { "firstName": "Regina", "lastName": "Fuller", "productName": "Caffe Americano" },  
        { "firstName": "Regina", "lastName": "Burke", "productName": "Caramel Latte"},   
        { "firstName": "Andrew", "lastName": "Petersen", "productName": "Caffe Americano"},  
        { "firstName": "Martin", "lastName": "Ohno", "productName": "Espresso con Panna"},   
        { "firstName": "Beate", "lastName": "Devling", "productName": "Green Tea"},   
        { "firstName": "Sven", "lastName": "Devling", "productName": "Espresso Truffle"},  
        { "firstName": "Petra", "lastName": "Burke", "productName": "Peppermint Mocha Twist"},  
        { "firstName": "Marco", "lastName": "Johnes", "productName": "Caffe Mocha"}  
     ],  
      dataFields: [
        'firstName: string',
        'lastName: string',
        'productName: string'
      ]
    })
  
    const columns = [{
      label: 'First Name',
      dataField: 'firstName'
    },
    {
      label: 'Last Name',
      dataField: 'lastName'
    },
    {
      label: 'Product',
      dataField: 'productName'
    }
    ];

  return (
    <div className={styles['container']}>
      
      <Grid
				dataSource={dataSource}
				columns={columns}
        appearance={appearance}
					behavior={behavior}
					paging={paging}
					pager={pager}
					filtering={filtering}
					sorting={sorting}
					editing={editing}
          selection={selection}
          grouping={grouping}
				>
			</Grid>
      
    </div>
  );
};


export default SmartGrid;
